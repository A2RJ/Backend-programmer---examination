document.addEventListener("DOMContentLoaded", function (event) {
    // Pizza section
    const pizza = document.getElementsByName("pizza");
    var pizzaValue = 0;

    if (pizzaValue  == 0) {
        var checkboxes = document.getElementsByName("topping");
        for (var checkbox of checkboxes) {
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
        var checkboxes = document.getElementsByName("topping");
        for (var checkbox of checkboxes) {
            if (checkbox.hasAttribute(pizza)) {
                checkbox.removeAttribute("disabled");
            } else {
                checkbox.checked = false;
                checkbox.setAttribute("disabled", "");
            }
            getValueCheckboxes();
        }
        prices();
    }

    // Size section
    const size = document.getElementsByName("size");
    var sizeValue = 0;
    for (var i = 0; i < size.length; i++) {
        size[i].addEventListener("click", getSizeValue, false);
    }

    function getSizeValue(e) {
        sizeValue = e.target.value;
        prices();
    }

    // Topping section
    const topping = document.getElementsByName("topping");
    var toppingValue = 0;
    for (var i = 0; i < topping.length; i++) {
        topping[i].addEventListener("click", getValueCheckboxes, false);
    }

    function getValueCheckboxes() {
        var a = Array.from(topping)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => parseFloat(checkbox.value));
        toppingValue = a.reduce((acc, value) => acc + value, 0);
        prices();
    }

    function prices() {
        var total =
            parseFloat(pizzaValue) +
            parseFloat(sizeValue) +
            parseFloat(toppingValue);
        document.getElementById("prices").innerText = "$" + total;
    }
});
