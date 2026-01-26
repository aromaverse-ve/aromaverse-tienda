// Cargar datos desde products.json
let products = [];
let cart = JSON.parse(localStorage.getItem('aromaverse_cart')) || [];

// Cargar productos desde JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data.products;
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts(products);
            updateCartCount();
        });
    })
    .catch(error => console.error('Error cargando productos:', error));

function renderProducts(productsToShow) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Icono de género
        let genderIcon = '👥';
        if (product.gender === 'Hombre') genderIcon = '👨';
        else if (product.gender === 'Mujer') genderIcon = '👩';
        else if (product.gender === 'Unisex') genderIcon = '👥';
        
        // Generar opciones de decants
        let decantsHTML = '<div class="decants-section"><label>Tamaño:</label><div class="decants-options">';
        product.decants.forEach((decant, index) => {
            decantsHTML += `
                <label class="decant-option">
                    <input type="radio" name="decant-${product.id}" value="${decant.ml}" data-price="${decant.price}" ${index === 0 ? 'checked' : ''} onchange="updatePrice(${product.id})">
                    <span class="decant-label">${decant.ml}ml - $${decant.price}</span>
                </label>
            `;
        });
        decantsHTML += '</div></div>';
        
        card.innerHTML = `
            <div class="product-image">🧴</div>
            <div class="product-info">
                <div class="product-category">${product.category === 'trending' ? 'Trending 🔥' : product.category === 'arabic' ? 'Árabe' : 'Nicho'}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-gender">${genderIcon} ${product.gender}</div>
                <div class="product-rating">⭐ ${product.rating} (${product.reviews})</div>
                <p class="product-description">${product.description}</p>
                <div class="product-prices">
                    <div class="price-item">
                        <span class="price-label">Botella Completa:</span>
                        <span class="price-value">$${product.price}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label">Decant Seleccionado:</span>
                        <span class="price-value" id="price-${product.id}">$${product.decants[0].price}</span>
                    </div>
                </div>
                <div class="product-stock">✓ Disponible</div>
                ${decantsHTML}
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Agregar al Carrito</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updatePrice(productId) {
    const selectedRadio = document.querySelector(`input[name="decant-${productId}"]:checked`);
    const price = selectedRadio.getAttribute('data-price');
    document.getElementById(`price-${productId}`).textContent = `$${price}`;
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    if (category === 'all') {
        renderProducts(products);
    } else {
        renderProducts(products.filter(p => p.category === category));
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const selectedRadio = document.querySelector(`input[name="decant-${productId}"]:checked`);
    const selectedMl = selectedRadio.value;
    const selectedPrice = parseFloat(selectedRadio.getAttribute('data-price'));
    
    const cartItemId = `${productId}-${selectedMl}ml`;
    const existing = cart.find(item => item.id === cartItemId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: cartItemId,
            name: `${product.name} (${selectedMl}ml)`,
            price: selectedPrice,
            quantity: 1
        });
    }
    
    localStorage.setItem('aromaverse_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
        cartTotal.textContent = '$0.00';
        return;
    }
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Cantidad: ${item.quantity}</p>
            </div>
            <div>
                <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                <button onclick="removeFromCart('${item.id}')" style="background: none; border: none; color: #dab469; cursor: pointer; font-size: 12px;">Eliminar</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = '$' + total.toFixed(2);
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    localStorage.setItem('aromaverse_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function toggleCart() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.classList.toggle('active');
    if (cartPanel.classList.contains('active')) {
        updateCartDisplay();
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Total: $${total.toFixed(2)}\n\nEsta es una demostración. Integra Stripe para pagos reales.`);
    cart = [];
    localStorage.setItem('aromaverse_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    toggleCart();
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}
