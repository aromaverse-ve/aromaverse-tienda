/* --- BASE DE DATOS DE PRODUCTOS --- */
const products = [
    {
        id: "col-viral",
        name: "Colección Viral Lattafa (Yara & Asad)",
        category: "trending",
        gender: "Unisex",
        rating: 4.9,
        reviews: 530,
        description: "La colección completa de 7 íconos. Desde la dulzura de Yara hasta la potencia de Asad.",
        price: 35.00, 
        image: "yara_collection.jpg", 
        type: "collection", // ESTO LE DICE AL CODIGO QUE ES ESPECIAL
        collectionItems: ["prod-yara-rosa", "prod-yara-moi", "prod-asad", "prod-khamrah", "prod-nebras", "prod-ameer", "prod-fakhar"]
    },
    {
        id: "prod-yara-rosa",
        name: "Yara (Rosa)",
        category: "trending",
        gender: "Mujer",
        rating: 4.8,
        reviews: 210,
        description: "Orquídea, Heliotropo y Frutas Tropicales.",
        price: 35.00,
        image: "yara.jpg",
        decants: [
            { ml: 5, price: 6.00 }, { ml: 10, price: 10.00 }, { ml: 15, price: 14.00 }
        ]
    },
    {
        id: "prod-yara-moi",
        name: "Yara Moi (Blanco)",
        category: "trending",
        gender: "Mujer",
        rating: 4.7,
        reviews: 120,
        description: "Jazmín, Melocotón y Caramelo.",
        price: 35.00,
        image: "yaramoi.jpg",
        decants: [
            { ml: 5, price: 6.00 }, { ml: 10, price: 10.00 }, { ml: 15, price: 14.00 }
        ]
    },
    {
        id: "prod-asad",
        name: "Lattafa Asad",
        category: "trending",
        gender: "Hombre",
        rating: 4.8,
        reviews: 340,
        description: "Pimienta negra, tabaco y vainilla.",
        price: 35.00,
        image: "asad.jpg",
        decants: [
            { ml: 5, price: 6.00 }, { ml: 10, price: 10.00 }, { ml: 15, price: 14.00 }
        ]
    },
    {
        id: "prod-khamrah",
        name: "Lattafa Khamrah",
        category: "trending",
        gender: "Unisex",
        rating: 4.9,
        reviews: 400,
        description: "Canela, dátiles y praliné.",
        price: 38.00,
        image: "khamrah.jpg",
        decants: [
            { ml: 5, price: 7.00 }, { ml: 10, price: 12.00 }, { ml: 15, price: 17.00 }
        ]
    },
    {
        id: "prod-nebras",
        name: "Lattafa Nebras",
        category: "trending",
        gender: "Mujer",
        rating: 4.8,
        reviews: 190,
        description: "Cacao rico, vainilla y bayas.",
        price: 40.00,
        image: "nebras.jpg",
        decants: [
            { ml: 5, price: 7.00 }, { ml: 10, price: 12.00 }, { ml: 15, price: 17.00 }
        ]
    },
    /* AGREGA AQUI EL RESTO DE TUS PRODUCTOS (Ameer, Fakhar, etc) */
];

/* --- LÓGICA DE LA TIENDA --- */

let cart = JSON.parse(localStorage.getItem('aromaverse_cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products); 
    updateCartCount();
    injectModalStyles(); 
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
        
        // Iconos y etiquetas
        let genderIcon = product.gender === 'Hombre' ? '👨' : (product.gender === 'Mujer' ? '👩' : '👥');
        let catLabel = product.category === 'trending' ? 'Trending 🔥' : 'Nicho';
        
        // Placeholder imagen
        let imageHTML = `<div class="product-image" style="font-size:50px; display:flex; justify-content:center; align-items:center; background:#f4f4f4; height:200px;">🧴</div>`;
        if(product.image && product.image.includes('.')) {
             // imageHTML = `<div class="product-image"><img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;"></div>`;
        }

        // --- LÓGICA PRINCIPAL: SI ES COLECCIÓN vs SI ES PRODUCTO NORMAL ---
        
        if (product.type === 'collection') {
            // TARJETA DE COLECCIÓN (LIMPIA, SIN PRECIOS)
            card.innerHTML = `
                ${imageHTML}
                <div class="product-info" style="display:flex; flex-direction:column; height:100%;">
                    <div class="product-category" style="background:#DAB469; color:black; font-weight:bold;">COLECCIÓN COMPLETA</div>
                    <h3 class="product-name" style="font-size:1.4em;">${product.name}</h3>
                    <div class="product-gender">${genderIcon} ${product.gender}</div>
                    <div class="product-rating">⭐ ${product.rating} (${product.reviews})</div>
                    <p class="product-description" style="flex-grow:1;">${product.description}</p>
                    
                    <div style="margin-top: auto; padding-top: 15px;">
                        <button class="btn-add-cart" style="background: transparent; border: 2px solid #DAB469; color: #DAB469; font-weight:bold; letter-spacing:1px;" onclick="openCollectionModal('${product.id}')">
                           EXPLORAR COLECCIÓN (7)
                        </button>
                    </div>
                </div>
            `;
        } else {
            // PRODUCTO NORMAL (CON TODAS LAS OPCIONES)
            const optionsHTML = generateOptionsHTML(product);
            
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
                    <button class="btn-add-cart" onclick="addToCart('${product.id}')">Añadir al Carrito</button>
                </div>
            `;
        }
        grid.appendChild(card);
    });
}

// Generador de Botones (Radio Buttons)
function generateOptionsHTML(product) {
    let html = '<div class="decants-section"><label style="font-size:0.9em; font-weight:bold;">Formato:</label><div class="decants-options" style="display:grid; grid-template-columns: 1fr 1fr; gap:5px; margin-top:5px;">';
    
    // Opción Botella
    html += `
        <label class="decant-option" style="border: 1px solid #dab469; padding:8px; border-radius:4px; cursor:pointer; text-align:center; display:block;">
            <input type="radio" name="decant-${product.id}" value="Botella" data-price="${product.price}" checked onchange="updatePrice('${product.id}')" style="display:none;">
            <span class="decant-label" style="font-size:0.85em;">Botella <br><b>$${product.price.toFixed(2)}</b></span>
        </label>
    `;

    // Opciones Decants
    if(product.decants) {
        product.decants.forEach((decant) => {
            html += `
                <label class="decant-option" style="border: 1px solid #ccc; padding:8px; border-radius:4px; cursor:pointer; text-align:center; display:block;">
                    <input type="radio" name="decant-${product.id}" value="${decant.ml}" data-price="${decant.price}" onchange="updatePrice('${product.id}')" style="display:none;">
                    <span class="decant-label" style="font-size:0.85em;">${decant.ml}ml <br><b>$${decant.price.toFixed(2)}</b></span>
                </label>
            `;
        });
    }
    html += '</div></div>';
    return html;
}

/* --- MODAL (VENTANA EMERGENTE) MEJORADO --- */

function openCollectionModal(collectionId) {
    const collection = products.find(p => p.id === collectionId);
    if (!collection) return;

    let modalOverlay = document.getElementById('collection-modal-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'collection-modal-overlay';
        modalOverlay.className = 'modal-overlay';
        document.body.appendChild(modalOverlay);
    }

    // Encabezado del Modal
    let modalContent = `
        <div class="modal-container">
            <button class="modal-close" onclick="closeCollectionModal()">×</button>
            <h2 style="font-family:serif; color: #DAB469; text-align: center; border-bottom:1px solid #333; padding-bottom:10px;">${collection.name}</h2>
            
            <div class="modal-scroll-area">
    `;

    // Buscar productos de la colección
    let itemsToShow = products.filter(p => collection.collectionItems.includes(p.id));

    if(itemsToShow.length === 0) {
        modalContent += `<p style="color:white; text-align:center; padding:20px;">Cargando fragancias...</p>`; 
    }

    itemsToShow.forEach(item => {
        // Generar opciones para CADA item dentro del modal
        const optionsHTML = generateOptionsHTML(item);
        
        modalContent += `
            <div class="modal-product-item">
                <div class="modal-prod-img" style="font-size:30px;">🧴</div>
                <div class="modal-prod-details">
                    <h3 style="color:#fff; margin:0;">${item.name}</h3>
                    <p style="color:#aaa; font-size:0.8em; margin-bottom:10px;">${item.description}</p>
                    
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                        <span style="color:#ccc; font-size:0.9em;">Precio:</span>
                        <span id="price-${item.id}" style="color: #DAB469; font-weight: bold; font-size: 1.1em;">$${item.price.toFixed(2)}</span>
                    </div>

                    ${optionsHTML}
                    
                    <button class="btn-add-cart" style="width: 100%; margin-top: 15px; background:#DAB469; color:#000; font-weight:bold;" onclick="addToCart('${item.id}')">Añadir al Carrito</button>
                </div>
            </div>
            <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">
        `;
    });

    modalContent += `</div></div>`;
    
    modalOverlay.innerHTML = modalContent;
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
    
    // Re-aplicar estilos visuales a los inputs recién creados
    highlightSelectedOptions();
}

function closeCollectionModal() {
    const modalOverlay = document.getElementById('collection-modal-overlay');
    if (modalOverlay) modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

/* --- ESTILOS VISUALES PARA SELECCIÓN --- */
// Esto hace que se ponga dorado el borde cuando seleccionas una opción
function updatePrice(productId) {
    const selectedRadio = document.querySelector(`input[name="decant-${productId}"]:checked`);
    if(selectedRadio) {
        // Actualizar precio numérico
        const price = parseFloat(selectedRadio.getAttribute('data-price'));
        // Buscar todos los elementos de precio con este ID (puede haber en la lista y en el modal)
        const priceEls = document.querySelectorAll(`#price-${productId}`);
        priceEls.forEach(el => el.textContent = `$${price.toFixed(2)}`);

        // Actualizar borde visual
        const allLabels = document.querySelectorAll(`input[name="decant-${productId}"]`);
        allLabels.forEach(input => {
            input.parentElement.style.borderColor = '#ccc';
            input.parentElement.style.background = 'transparent';
             input.parentElement.style.color = 'inherit';
        });
        
        selectedRadio.parentElement.style.borderColor = '#DAB469';
        selectedRadio.parentElement.style.background = '#332b18'; // Fondo dorado oscuro suave
        selectedRadio.parentElement.style.color = '#DAB469';
    }
}

// Función auxiliar para resaltar selección inicial
function highlightSelectedOptions() {
    const checkedInputs = document.querySelectorAll('input[type="radio"]:checked');
    checkedInputs.forEach(input => {
        input.parentElement.style.borderColor = '#DAB469';
        input.parentElement.style.background = '#332b18';
        input.parentElement.style.color = '#DAB469';
    });
}

/* --- FUNCIONES CARRITO (Standard) --- */

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const selectedRadio = document.querySelector(`input[name="decant-${productId}"]:checked`);
    
    if (!selectedRadio) return alert("Por favor selecciona un formato."); 

    let selectedSize = selectedRadio.value;
    if(!isNaN(selectedSize)) selectedSize += "ml"; 

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
    alert("¡Añadido al carrito!");
    updateCartDisplay();
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

function checkout() {
    if(cart.length === 0) return alert("Carrito vacío");
    let message = "Hola AromaVerse, quiero ordenar:\n\n";
    let total = 0;
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `▪️ ${item.name} x${item.quantity} - $${subtotal.toFixed(2)}\n`;
    });
    message += `\n*TOTAL: $${total.toFixed(2)}*`;
    message += "\n\n(Enviado desde la web)";
    const phone = "584120000000"; 
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

/* --- ESTILOS INYECTADOS --- */
function injectModalStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Modal Oscuro y Elegante */
        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9);
            display: none; justify-content: center; align-items: center;
            z-index: 9999;
            backdrop-filter: blur(8px);
        }
        .modal-container {
            background: #111; /* Fondo Negro Suave */
            color: white;
            width: 90%; max-width: 500px;
            height: 85vh;
            border: 1px solid #DAB469; /* Borde Dorado */
            border-radius: 12px;
            padding: 20px;
            position: relative;
            display: flex; flex-direction: column;
            box-shadow: 0 0 20px rgba(218, 180, 105, 0.2);
        }
        .modal-scroll-area {
            flex: 1; overflow-y: auto; padding-right: 10px; margin-top:15px;
        }
        .modal-close {
            position: absolute; top: 10px; right: 15px;
            background: none; border: none; color: #DAB469; font-size: 30px; cursor: pointer;
        }
        .modal-product-item {
            display: flex; gap: 15px; align-items: flex-start; padding: 10px 0;
        }
        .modal-prod-img { 
            width: 70px; height: 70px; 
            background: #222; border-radius: 8px; 
            display: flex; align-items: center; justify-content: center; 
        }
        .modal-prod-details { flex: 1; }
    `;
    document.head.appendChild(style);
}