/* --- BASE DE DATOS DE PRODUCTOS (Actualizada con decants de 5, 10 y 15ml) --- */
const products = [
    {
        id: 1,
        name: "Yara by Lattafa",
        category: "trending",
        gender: "Unisex",
        rating: 4.8,
        reviews: 210,
        description: "Una explosión dulce y cremosa de orquídea, heliotropo y notas tropicales. Suave e irresistible.",
        price: 35.00,
        decants: [
            { ml: 5, price: 6.00 },
            { ml: 10, price: 10.00 },
            { ml: 15, price: 14.00 }
        ]
    },
    {
        id: 2,
        name: "Rasasi Hawas Black",
        category: "arabic",
        gender: "Hombre",
        rating: 4.9,
        reviews: 150,
        description: "Frescura acuática intensa con un fondo oscuro y seductor de especias y maderas modernas.",
        price: 45.00,
        decants: [
            { ml: 5, price: 8.00 },
            { ml: 10, price: 14.00 },
            { ml: 15, price: 19.00 }
        ]
    },
    {
        id: 3,
        name: "Ajmal Wisal Dhahab",
        category: "arabic",
        gender: "Mujer",
        rating: 4.7,
        reviews: 85,
        description: "Elegancia dorada con una mezcla brillante de pera fresca, rosa, sándalo y almizcle.",
        price: 52.00,
        decants: [
            { ml: 5, price: 9.00 },
            { ml: 10, price: 16.00 },
            { ml: 15, price: 22.00 }
        ]
    },
    {
        id: 4,
        name: "Lattafa Nebras",
        category: "arabic",
        gender: "Mujer",
        rating: 4.8,
        reviews: 190,
        description: "Un aroma gourmand adictivo con notas de cacao rico, vainilla y bayas rojas azucaradas.",
        price: 40.00,
        decants: [
            { ml: 5, price: 7.00 },
            { ml: 10, price: 12.00 },
            { ml: 15, price: 17.00 }
        ]
    },
    {
        id: 5,
        name: "Al Haramain Amber Oud",
        category: "arabic",
        gender: "Unisex",
        rating: 4.9,
        reviews: 320,
        description: "Opulencia amaderada equilibrada con un corazón dulce de ámbar y frutas maduras.",
        price: 48.00,
        decants: [
            { ml: 5, price: 8.50 },
            { ml: 10, price: 15.00 },
            { ml: 15, price: 21.00 }
        ]
    },
    {
        id: 6,
        name: "Rasasi Dahn Al Oudh",
        category: "arabic",
        gender: "Hombre",
        rating: 4.6,
        reviews: 45,
        description: "La esencia pura y tradicional del Oud. Maderas profundas para una presencia imponente.",
        price: 55.00,
        decants: [
            { ml: 5, price: 9.50 },
            { ml: 10, price: 17.00 },
            { ml: 15, price: 24.00 }
        ]
    },
    {
        id: 7,
        name: "Lattafa Khamrah Abiyad",
        category: "arabic",
        gender: "Unisex",
        rating: 4.9,
        reviews: 400,
        description: "La calidez de la canela y los dátiles envuelta en un almizcle blanco cremoso y limpio.",
        price: 38.00,
        decants: [
            { ml: 5, price: 7.00 },
            { ml: 10, price: 12.00 },
            { ml: 15, price: 17.00 }
        ]
    },
    {
        id: 8,
        name: "Ajmal Mukhallat Noor",
        category: "arabic",
        gender: "Mujer",
        rating: 4.5,
        reviews: 60,
        description: "Una mezcla oriental luminosa y sofisticada de azafrán, ámbar y notas florales exóticas.",
        price: 42.00,
        decants: [
            { ml: 5, price: 7.50 },
            { ml: 10, price: 13.00 },
            { ml: 15, price: 18.00 }
        ]
    },
    {
        id: 9,
        name: "Creed Original Vetiver",
        category: "niche",
        gender: "Hombre",
        rating: 4.8,
        reviews: 110,
        description: "Limpio, verde y jabonoso. Una interpretación fresca, cítrica y moderna del vetiver clásico.",
        price: 95.00,
        decants: [
            { ml: 5, price: 16.00 },
            { ml: 10, price: 29.00 },
            { ml: 15, price: 42.00 }
        ]
    },
    {
        id: 10,
        name: "Maison Margiela Jazz Club",
        category: "niche",
        gender: "Hombre",
        rating: 4.7,
        reviews: 280,
        description: "Ambiente de club privado con notas embriagadoras de ron, tabaco y vainilla cálida.",
        price: 85.00,
        decants: [
            { ml: 5, price: 14.00 },
            { ml: 10, price: 26.00 },
            { ml: 15, price: 38.00 }
        ]
    },
    {
        id: 11,
        name: "Heeley Sel Marin",
        category: "niche",
        gender: "Unisex",
        rating: 4.6,
        reviews: 95,
        description: "Brisa marina auténtica. Sal, limón y algas que evocan un día perfecto en la costa.",
        price: 78.00,
        decants: [
            { ml: 5, price: 13.00 },
            { ml: 10, price: 24.00 },
            { ml: 15, price: 35.00 }
        ]
    },
    {
        id: 12,
        name: "Parfums de Marly Layton",
        category: "niche",
        gender: "Hombre",
        rating: 4.9,
        reviews: 500,
        description: "Cardamomo, manzana y vainilla. Un aroma nicho seductor y extremadamente versátil.",
        price: 88.00,
        decants: [
            { ml: 5, price: 15.00 },
            { ml: 10, price: 28.00 },
            { ml: 15, price: 40.00 }
        ]
    },
    {
        id: 13,
        name: "Tom Ford Tobacco Vanille",
        category: "niche",
        gender: "Unisex",
        rating: 4.8,
        reviews: 600,
        description: "Hojas de tabaco ricas y especiadas fusionadas con vainilla cremosa, cacao y frutos secos.",
        price: 92.00,
        decants: [
            { ml: 5, price: 16.00 },
            { ml: 10, price: 29.00 },
            { ml: 15, price: 42.00 }
        ]
    },
    {
        id: 14,
        name: "Amouage Dia Man",
        category: "niche",
        gender: "Hombre",
        rating: 4.7,
        reviews: 70,
        description: "Sofisticación pura. Incienso de Omán mezclado magistralmente con peonía y vetiver seco.",
        price: 98.00,
        decants: [
            { ml: 5, price: 17.00 },
            { ml: 10, price: 30.00 },
            { ml: 15, price: 44.00 }
        ]
    }
];

/* --- LÓGICA DE LA TIENDA --- */

let cart = JSON.parse(localStorage.getItem('aromaverse_cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products); 
    updateCartCount();
});

function renderProducts(productsToShow) {
    const grid = document.getElementById('products-grid');
    if(!grid) return;
    grid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">No se encontraron productos en esta categoría.</p>';
        return;
    }

    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let genderIcon = '👥';
        if (product.gender === 'Hombre') genderIcon = '👨';
        else if (product.gender === 'Mujer') genderIcon = '👩';
        
        let catLabel = 'Nicho';
        if(product.category === 'trending') catLabel = 'Trending 🔥';
        else if(product.category === 'arabic') catLabel = 'Árabe 🕌';
        
        // Generar opciones de decants (5, 10, 15ml)
        let decantsHTML = '<div class="decants-section"><label>Tamaño:</label><div class="decants-options">';
        product.decants.forEach((decant, index) => {
            decantsHTML += `
                <label class="decant-option">
                    <input type="radio" name="decant-${product.id}" value="${decant.ml}" data-price="${decant.price}" ${index === 0 ? 'checked' : ''} onchange="updatePrice(${product.id})">
                    <span class="decant-label">${decant.ml}ml - $${decant.price.toFixed(2)}</span>
                </label>
            `;
        });
        decantsHTML += '</div></div>';
        
        card.innerHTML = `
            <div class="product-image">🧴</div>
            <div class="product-info">
                <div class="product-category">${catLabel}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-gender">${genderIcon} ${product.gender}</div>
                <div class="product-rating">⭐ ${product.rating} <span style="color:#aaa; font-size:0.8em">(${product.reviews})</span></div>
                <p class="product-description">${product.description}</p>
                <div class="product-prices">
                    <div class="price-item">
                        <span class="price-label">Botella Completa:</span>
                        <span class="price-value">$${product.price.toFixed(2)}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label">Decant Seleccionado:</span>
                        <span class="price-value" id="price-${product.id}">$${product.decants[0].price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="product-stock">✓ Disponible</div>
                ${decantsHTML}
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updatePrice(productId) {
    const selectedRadio = document.querySelector(`input[name="decant-${productId}"]:checked`);
    if(selectedRadio) {
        const price = parseFloat(selectedRadio.getAttribute('data-price'));
        document.getElementById(`price-${productId}`).textContent = `$${price.toFixed(2)}`;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const selectedRadio = document.querySelector(`input[name="decant-${productId}"]:checked`);
    
    if (!selectedRadio) return; 

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
    
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "¡Añadido! ✓";
    btn.style.backgroundColor = "#4CAF50";
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
    }, 1500);

    const cartPanel = document.getElementById('cart-panel');
    if (!cartPanel.classList.contains('active')) {
        toggleCart();
    } else {
        updateCartDisplay();
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if(badge) badge.textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
        if(cartTotal) cartTotal.textContent = '$0.00';
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
                <button onclick="removeFromCart('${item.id}')" style="background: none; border: none; color: #dab469; cursor: pointer; font-size: 11px; text-decoration: underline; margin-top:5px;">Eliminar</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    if(cartTotal) cartTotal.textContent = '$' + total.toFixed(2);
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    localStorage.setItem('aromaverse_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function toggleCart() {
    const cartPanel = document.getElementById('cart-panel');
    if(cartPanel) {
        cartPanel.classList.toggle('active');
        if (cartPanel.classList.contains('active')) {
            updateCartDisplay();
        }
    }
}

function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const btnClicked = event.target.closest('.filter-btn');
    if(btnClicked) btnClicked.classList.add('active');

    if (category === 'all') {
        renderProducts(products);
    } else {
        renderProducts(products.filter(p => p.category === category));
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Total a pagar: $${total.toFixed(2)}\n\n(Aquí iría la integración con WhatsApp o Stripe)`);
    cart = [];
    localStorage.setItem('aromaverse_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    toggleCart();
}
