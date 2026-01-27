/* --- BASE DE DATOS DE PRODUCTOS --- */
const products = [
    {
        id: 1,
        name: "Yara by Lattafa",
        category: "trending",
        gender: "Unisex",
        rating: 4.8,
        reviews: 210,
        description: "Una explosión dulce y cremosa de orquídea, heliotropo y notas tropicales.",
        price: 35.00,
        image: "yara.jpg",
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
        description: "Frescura acuática intensa con un fondo oscuro y seductor.",
        price: 45.00,
        image: "hawas.jpg",
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
        description: "Elegancia dorada con una mezcla brillante de pera fresca, rosa y sándalo.",
        price: 52.00,
        image: "wisal.jpg",
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
        description: "Un aroma gourmand adictivo con notas de cacao rico, vainilla y bayas.",
        price: 40.00,
        image: "nebras.jpg",
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
        description: "Opulencia amaderada equilibrada con un corazón dulce de ámbar.",
        price: 48.00,
        image: "amber.jpg",
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
        description: "La esencia pura y tradicional del Oud. Maderas profundas.",
        price: 55.00,
        image: "dahn.jpg",
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
        description: "La calidez de la canela y los dátiles envuelta en un almizcle blanco.",
        price: 38.00,
        image: "khamrah.jpg",
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
        description: "Una mezcla oriental luminosa de azafrán, ámbar y notas florales.",
        price: 42.00,
        image: "noor.jpg",
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
        description: "Limpio, verde y jabonoso. Interpretación fresca del vetiver clásico.",
        price: 95.00,
        image: "vetiver.jpg",
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
        description: "Ambiente de club privado con ron, tabaco y vainilla cálida.",
        price: 85.00,
        image: "jazz.jpg",
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
        description: "Brisa marina auténtica. Sal, limón y algas.",
        price: 78.00,
        image: "selmarin.jpg",
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
        description: "Cardamomo, manzana y vainilla. Seductor y versátil.",
        price: 88.00,
        image: "layton.jpg",
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
        description: "Hojas de tabaco ricas, vainilla cremosa y frutos secos.",
        price: 92.00,
        image: "tobacco.jpg",
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
        description: "Sofisticación pura. Incienso de Omán, peonía y vetiver seco.",
        price: 98.00,
        image: "dia.jpg",
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
        grid.innerHTML = '<p style="padding:20px;">No se encontraron productos.</p>';
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
        
        // 1. Crear opciones (Botella + Decants)
        let optionsHTML = '<div class="decants-section"><label>Formato:</label><div class="decants-options">';
        
        // Botella (Seleccionada por defecto)
        optionsHTML += `
            <label class="decant-option" style="border: 1px solid #dab469; background: #fffcf5;">
                <input type="radio" name="decant-${product.id}" value="Botella" data-price="${product.price}" checked onchange="updatePrice(${product.id})">
                <span class="decant-label">Botella ($${product.price.toFixed(2)})</span>
            </label>
        `;

        // Decants
        product.decants.forEach((decant) => {
            optionsHTML += `
                <label class="decant-option">
                    <input type="radio" name="decant-${product.id}" value="${decant.ml}" data-price="${decant.price}" onchange="updatePrice(${product.id})">
                    <span class="decant-label">${decant.ml}ml - $${decant.price.toFixed(2)}</span>
                </label>
            `;
        });
        optionsHTML += '</div></div>';
        
        // Imagen del producto (He puesto los nombres placeholder arriba)
        // IMPORTANTE: Si no has subido la foto 'yara.jpg', saldrá un icono roto. 
        // Si prefieres que salga el emoji mientras subes fotos, avísame.
        let imageHTML = `<div class="product-image">🧴</div>`;
        if(product.image && product.image !== "") {
             // Si subes las fotos, descomenta la linea de abajo y borra la de arriba
             // imageHTML = `<div class="product-image"><img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;"></div>`;
        }

        card.innerHTML = `
            ${imageHTML}
            <div class="product-info">
                <div class="product-category">${catLabel}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-gender">${genderIcon} ${product.gender}</div>
                <div class="product-rating">⭐ ${product.rating}</div>
                <p class="product-description">${product.description}</p>
                
                <div class="product-prices">
                    <div class="price-item">
                        <span class="price-label">Precio:</span>
                        <span class="price-value" id="price-${product.id}">$${product.price.toFixed(2)}</span>
                    </div>
                </div>
                
                ${optionsHTML}
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
        const priceEl = document.getElementById(`price-${productId}`);
        if(priceEl) priceEl.textContent = `$${price.toFixed(2)}`;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const selectedRadio = document.querySelector(`input[name="decant-${productId}"]:checked`);
    
    if (!selectedRadio) return; 

    let selectedSize = selectedRadio.value;
    if(!isNaN(selectedSize)) selectedSize += "ml"; // Si es numero, agrega 'ml'

    const selectedPrice = parseFloat(selectedRadio.getAttribute('data-price'));
    const cartItemId = `${productId}-${selectedSize}`;
    
    const existing = cart.find(item => item.id === cartItemId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: cartItemId,
            name: `${product.name} (${selectedSize})`,
            price: selectedPrice,
            quantity: 1
        });
    }
    
    localStorage.setItem('aromaverse_cart', JSON.stringify(cart));
    updateCartCount();
    
    const btn = event.target;
    const oldText = btn.innerText;
    btn.innerText = "¡Listo! ✓";
    setTimeout(() => { btn.innerText = oldText; }, 1000);
    
    const panel = document.getElementById('cart-panel');
    if(panel && !panel.classList.contains('active')) toggleCart();
    else updateCartDisplay();
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
        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <div>
                    <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                    <button onclick="removeFromCart('${item.id}')" style="border:none; background:none; color:#dab469; cursor:pointer; text-decoration:underline; font-size:12px;">Eliminar</button>
                </div>
            </div>`;
    });
    if(cartTotal) cartTotal.textContent = '$' + total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('aromaverse_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function toggleCart() {
    const p = document.getElementById('cart-panel');
    if(p) {
        p.classList.toggle('active');
        if(p.classList.contains('active')) updateCartDisplay();
    }
}

function filterProducts(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(event && event.target) event.target.closest('.filter-btn').classList.add('active');
    
    if (cat === 'all') renderProducts(products);
    else renderProducts(products.filter(p => p.category === cat));
}

function checkout() {
    if(cart.length === 0) return alert("Carrito vacío");
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    alert(`Total: $${total.toFixed(2)} - ¡Gracias por tu compra!`);
    cart = [];
    localStorage.setItem('aromaverse_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    toggleCart();
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
}
