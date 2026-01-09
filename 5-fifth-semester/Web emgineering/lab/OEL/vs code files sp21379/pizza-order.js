document.getElementById('submitOrder').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const pizzas = Array.from(document.querySelectorAll('.pizza-option:checked')).map(opt => opt.value);
    const toppings = Array.from(document.querySelectorAll('.topping-option:checked')).map(opt => opt.value);
    const delivery = document.querySelector('input[name="delivery"]:checked');
    const deliveryCost = delivery.dataset.price ? parseFloat(delivery.dataset.price) : 0;

    // Calculate the total price for pizzas
    let totalPrice = pizzas.reduce((sum, pizza) => {
        const price = parseFloat(document.querySelector(`input[value="${pizza}"]`).dataset.price);
        return sum + price;
    }, 0);

    // Add the price for extra toppings
    totalPrice += toppings.reduce((sum, topping) => {
        const price = parseFloat(document.querySelector(`input[value="${topping}"]`).dataset.price);
        return sum + price;
    }, 0);

    // Add the delivery cost
    totalPrice += deliveryCost;

    // Display total price in the text field and summary
    document.getElementById('totalPrice').value = `$${totalPrice.toFixed(2)}`;
    document.getElementById('customerName').innerText = `Dear ${name}, we have received the following order from you:`;
    document.getElementById('pizzaList').innerHTML = pizzas.map(pizza => `<li>${pizza}</li>`).join('');
    document.getElementById('toppingsList').innerText = toppings.length ? `With the following extra toppings: ${toppings.join(', ')}` : '';
    document.getElementById('totalCost').innerText = `Total price is $${totalPrice.toFixed(2)}`;
    
    // Show the order summary and hide the form
    document.querySelector('.order-form').classList.add('hidden');
    document.getElementById('orderSummary').classList.remove('hidden');
});
