document.addEventListener("DOMContentLoaded", function (event) {
    
    // Get element
    const pizza = document.getElementsByName("pizza");
    const size = document.getElementsByName("size");
    const toppings = document.getElementsByName("topping");
    
    // Set default value
    var pizzaValue = 0;
    var sizeValue = 0;
    var toppingValue = 0;
    
    // Pizza section
    if (pizzaValue  == 0) {
        for (var checkbox of toppings) {
            checkbox.setAttribute("disabled", "");
        }
    }

    for (var i = 0; i < pizza.length; i++) {
        pizza[i].addEventListener("click", getPizzaValue, false);
    }

    function getPizzaValue(e) {
        pizzaValue = e.target.value;
        if (pizzaValue == "8") {
            disableChekbox("data-topping-pizza1");
        } else if (pizzaValue == "10") {
            disableChekbox("data-topping-pizza2");
        } else if (pizzaValue == "12") {
            disableChekbox("data-topping-pizza3");
        }
    }

    function disableChekbox(pizza) {
        for (var checkbox of toppings) {
            if (checkbox.hasAttribute(pizza)) {
                checkbox.removeAttribute("disabled");
            } else {
                checkbox.checked = false;
                checkbox.setAttribute("disabled", "");
            }
            getValuetoppings();
        }
        prices();
    }

    // Size section
    for (var i = 0; i < size.length; i++) {
        size[i].addEventListener("click", getSizeValue, false);
    }

    function getSizeValue(e) {
        sizeValue = e.target.value;
        prices();
    }

    // Toppings section
    for (var i = 0; i < toppings.length; i++) {
        toppings[i].addEventListener("click", getValuetoppings, false);
    }

    function getValuetoppings() {
        var a = Array.from(toppings)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => parseFloat(checkbox.value));
        toppingValue = a.reduce((acc, value) => acc + value, 0);
        prices();
    }

    // Prices section
    function prices() {
        var total =
            parseFloat(pizzaValue) +
            parseFloat(sizeValue) +
            parseFloat(toppingValue);
        document.getElementById("prices").innerText = "$" + total;
    }
});
