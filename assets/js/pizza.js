document.addEventListener("DOMContentLoaded", () => {

    // Get element
    const pizza = document.getElementsByName("pizza")
    const size = document.getElementsByName("size")
    const toppings = document.getElementsByName("topping")

    // Set default value
    var price = {
        pizzaPrice: 0,
        sizePrice: 0,
        toppingPrice: 0
    }

    // List of functions
    const enableChekbox = (pizza) => {
        toppings.forEach((tp) => {
            if (tp.hasAttribute(pizza)) {
                tp.removeAttribute("disabled")
            } else {
                tp.checked = false
                tp.setAttribute("disabled", "")
            }
            getValuetoppings()
        })
        prices()
    }

    const getValuetoppings = () => {
        var toppingsPrice = Array.from(toppings)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => parseFloat(checkbox.value))
        price.toppingPrice = toppingsPrice.reduce((acc, value) => acc + value, 0)
        prices()
    }

    const prices = () => {
        var totalPay =
            parseFloat(price.pizzaPrice) +
            parseFloat(price.sizePrice) +
            parseFloat(price.toppingPrice)
        document.getElementById("prices").innerText = "$" + totalPay
    }

    // Pizza section
    pizza.forEach((pz) => {
        pz.addEventListener("click", (e) => {
            price.pizzaPrice = e.target.value
            if (price.pizzaPrice == "8") {
                enableChekbox("data-topping-pizza1")
            } else if (price.pizzaPrice == "10") {
                enableChekbox("data-topping-pizza2")
            } else if (price.pizzaPrice == "12") {
                enableChekbox("data-topping-pizza3")
            }
        })
    })

    // Size section
    size.forEach((sz) => {
        sz.addEventListener("click", (e) => {
            price.sizePrice = e.target.value
            prices()
        })
    })

    // Toppings section
    toppings.forEach((tp) => {
        tp.addEventListener("click", getValuetoppings)
    })
})