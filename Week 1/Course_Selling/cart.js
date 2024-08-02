document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2);
    }

    const cartItemsDiv = document.getElementById('cart-items');
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="width: 100px; height: auto;">
            <div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    const totalAmount = calculateTotal(cart);
    const totalDiv = document.createElement('div');
    totalDiv.className = 'cart-item';
    totalDiv.innerHTML = `
        <div>
            <h3>Total Amount</h3>
            <span>$${totalAmount}</span>
        </div>
    `;
    cartItemsDiv.appendChild(totalDiv);
});
