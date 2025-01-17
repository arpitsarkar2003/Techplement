document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartButton();
    }

    function updateCartButton() {
        const cartButton = document.getElementById('cart-button');
        const itemCount = cart.length;
        cartButton.textContent = `Cart (${itemCount})`;
    }

    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2);
    }

    function renderCart() {
        const cartItemsDiv = document.getElementById('cart-items');
        cartItemsDiv.innerHTML = '';

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
            cart.length = 0;
            updateCartButton();
        }, 3000);
    }

    document.getElementById('checkout').addEventListener('click', showPurchaseModal);

    document.getElementById('cart-items').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            removeItem(index);
        }
    });

    const checkoutButton = document.getElementById('checkout');

    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            const username = localStorage.getItem('username');

            if (username) {
                showPurchaseCompleteModal();
            } else {
                alert('You must be signed in to proceed with checkout.');
                window.location.href = 'sign-in.html';
            }
        });
    }

    renderCart();
    updateCartButton();
});





    