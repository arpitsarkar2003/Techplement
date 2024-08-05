document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2);
    }

    function renderCart() {
        const cartItemsDiv = document.getElementById('cart-items');
        cartItemsDiv.innerHTML = ''; // Clear existing items

        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
            document.getElementById('subtotal').textContent = `$0.00`;
            document.getElementById('total').textContent = `$0.00`;
        } else {
            cart.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" style="width: 100px; height: auto;">
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <span>${item.price}</span>
                        <button class="remove-item" data-index="${index}">Remove</button>
                    </div>
                `;
                cartItemsDiv.appendChild(itemDiv);
            });

            const subtotal = calculateTotal(cart);
            document.getElementById('subtotal').textContent = `$${subtotal}`;
            document.getElementById('total').textContent = `$${subtotal}`;
        }
    }

    function removeItem(index) {
        cart.splice(index, 1);
        saveCart(cart);
        renderCart();
    }

    function showPurchaseModal() {
        const modal = document.getElementById('purchase-modal');
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.display = 'none';
            localStorage.removeItem('cart'); 
            location.replace(location.href);
            renderCart(); 
        }, 3000);
    }

    document.getElementById('checkout').addEventListener('click', showPurchaseModal);

    document.getElementById('cart-items').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            removeItem(index);
        }
    });

    renderCart();
});
