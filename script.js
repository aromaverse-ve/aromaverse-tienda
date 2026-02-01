/* --- BASE DE DATOS DE PRODUCTOS --- */
/* HE AÑADIDO 'type: collection' AL PRIMERO PARA IDENTIFICARLO */
/* Y HE AGREGADO ALGUNOS PERFUMES QUE FALTABAN PARA COMPLETAR LA COLECCIÓN VIRAL */

const products = [
    {
        id: "col-viral",
        name: "Colección Viral Lattafa (Yara & Asad)",
        category: "trending",
        gender: "Unisex",
        rating: 4.9,
        reviews: 530,
        description: "La colección completa de 7 íconos. Desde la dulzura de Yara hasta la potencia de Asad.",
        price: 35.00, // Precio referencial
        image: "yara_collection.jpg", // Asegúrate de tener esta foto
        type: "collection", // ESTO ES LA CLAVE: Indica que es una tarjeta de colección
        collectionItems: ["prod-yara-rosa", "prod-yara-moi", "prod-asad", "prod-khamrah", "prod-nebras", "prod-ameer", "prod-fakhar"] // IDs de los perfumes que van dentro
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
        description: "Pimienta negra, tabaco y vainilla. Potencia pura.",
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
        description: "Canela, dátiles y praliné. Un postre olfativo.",
        price: 38.00,
        image: "khamrah.jpg",
        decants: [
            { ml: 5, price: 7.00 }, { ml: 10, price: 12.00 }, { ml: 15, price: 17.00 }
        ]
    },
    // ... Puedes seguir agregando los que faltan (Nebras, Ameer, etc) usando el mismo formato ...
    // ... Aquí dejo los otros productos que ya tenías para rellenar la tienda ...
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
            { ml: 5, price: 8.00 }, { ml: 10, price: 14.00 }, { ml: 15, price: 19.00 }
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
            { ml: 5, price: 15.00 }, { ml: 10, price: 28.00 }, { ml: 15, price: 40.00 }
        ]
    }
    // Agrega el resto de tus productos aquí...
];

/* --- LÓGICA DE LA TIENDA --- */

let cart = JSON.parse(localStorage.getItem('aromaverse_cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products); 
    updateCartCount();
    injectModalStyles(); // Inyectamos estilos para el modal sin tocar CSS
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
        // Filtramos para no mostrar los items individuales que están "ocultos" dentro de la colección si así lo quisieras,
        // pero por ahora mostraremos todo.
        
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let genderIcon = '👥';
        if (product.gender === 'Hombre') genderIcon = '👨';
        else if (product.gender === 'Mujer') genderIcon = '👩';
        
        let catLabel = 'Nicho';
        if(product.category === 'trending') catLabel = 'Trending 🔥';
        else if(product.category === 'arabic') catLabel = 'Árabe 🕌';
        
        // --- LOGICA DE IMAGEN ---
        let imageHTML = `<div class="product-image">🧴</div>`;
        if(product.image && product.image !== "") {
             // imageHTML = `<div class="product-image"><img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;"></div>`;
        }

        // --- AQUI ESTA EL CAMBIO IMPORTANTE ---
        
        if (product.type === 'collection') {
            // SI ES COLECCIÓN: No mostramos radios, solo boton explorar
            card.innerHTML = `
                ${imageHTML}
                <div class="product-info">
                    <div class="product-category" style="background:#DAB469; color:black;">COLECCIÓN COMPLETA</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-gender">${genderIcon} ${product.gender}</div>
                    <div class="product-rating">⭐ ${product.rating} (${product.reviews})</div>
                    <p class="product-description">${product.description}</p>
                    
                    <div style="margin-top: 20px;">
                        <button class="btn-add-cart" style="background: transparent; border: 1px solid #DAB469; color: #DAB469;" onclick="openCollectionModal('${product.id}')">
                           EXPLORAR COLECCIÓN (7)
                        </button>
                    </div>
                </div>
            `;
        } else {
            // SI ES PRODUCTO NORMAL: Mostramos todo normal
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

// Función auxiliar para generar los botones de precio (para reusar en modal y card)
function generateOptionsHTML(product) {
    let html = '<div class="decants-section"><label>Formato:</label><div class="decants-options">';
    
    // Botella
    html += `
        <label class="decant-option" style="border: 1px solid #dab469; background: #fffcf5;">
            <input type="radio" name="decant-${product.id}" value="Botella" data-price="${product.price}" checked onchange="updatePrice('${product.id}')">
            <span class="decant-label">Botella ($${product.price.toFixed(2)})</span>
        </label>
    `;

    // Decants
    if(product.decants) {
        product.decants.forEach((decant) => {
            html += `
                <label class="decant-option">
                    <input type="radio" name="decant-${product.id}" value="${decant.ml}" data-price="${decant.price}" onchange="updatePrice('${product.id}')">
                    <span class="decant-label">${decant.ml}ml - $${decant.price.toFixed(2)}</span>
                </label>
            `;
        });
    }
    html += '</div></div>';
    return html;
}


/* --- FUNCIONALIDAD DEL MODAL (MINI CATÁLOGO) --- */

function openCollectionModal(collectionId) {
    const collection = products.find(p => p.id === collectionId);
    if (!collection) return;

    // Crear el overlay si no existe
    let modalOverlay = document.getElementById('collection-modal-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'collection-modal-overlay';
        modalOverlay.className = 'modal-overlay';
        document.body.appendChild(modalOverlay);
    }

    // Contenido del Modal
    let modalContent = `
        <div class="modal-container">
            <button class="modal-close" onclick="closeCollectionModal()">×</button>
            <h2 style="font-family: 'Cinzel', serif; color: #DAB469; text-align: center; margin-bottom: 5px;">Colección Viral Completa</h2>
            <p style="text-align:center; font-size: 0.9em; color: #ccc; margin-bottom: 20px;">Explora cada fragancia individualmente</p>
            
            <div class="modal-scroll-area">
    `;

    // Buscar los productos que pertenecen a esta colección
    // Si definiste 'collectionItems' en el objeto, usamos esos. Si no, mostramos todos los 'trending'.
    let itemsToShow = [];
    if (collection.collectionItems) {
        itemsToShow = products.filter(p => collection.collectionItems.includes(p.id));
    } else {
        itemsToShow = products.filter(p => p.category === 'trending' && p.id !== collection.id);
    }

    if(itemsToShow.length === 0) {
        modalContent += `<p>Cargando productos...</p>`; 
        // Nota: Asegurate de añadir en 'products' los items con los IDs correctos (prod-yara-rosa, etc)
    }

    itemsToShow.forEach(item => {
        // Generamos la tarjeta MINI con todas las opciones de precio
        const optionsHTML = generateOptionsHTML(item);
        
        // Imagen (Placeholder o Real)
        let imgHTML = `<div style="font-size:30px; text-align:center;">🌸</div>`;
        // if(item.image) imgHTML = `<img src="${item.image}" ... >`;

        modalContent += `
            <div class="modal-product-item">
                <div class="modal-prod-img">${imgHTML}</div>
                <div class="modal-prod-details">
                    <h3 style="color:white; margin: 0 0 5px 0;">${item.name}</h3>
                    <div style="font-size: 0.8em; color: #999; margin-bottom: 10px;">${item.gender} • ${item.description.substring(0, 50)}...</div>
                    
                    <div class="price-display-modal">
                        <span id="price-${item.id}" style="color: #DAB469; font-weight: bold; font-size: 1.2em;">$${item.price.toFixed(2)}</span>
                    </div>

                    <div class="modal-options-wrapper">
                        ${optionsHTML}
                    </div>
                    
                    <button class="btn-add-cart" style="width: 100%; margin-top: 10px; padding: 10px;" onclick="addToCart('${item.id}')">Añadir al Carrito</button>
                </div>
            </div>
            <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">
        `;
    });

    modalContent += `</div></div>`; // Cerrar container y scroll area
    
    modalOverlay.innerHTML = modalContent;
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloquear scroll de fondo
}

function closeCollectionModal() {
    const modalOverlay = document.getElementById('collection-modal-overlay');
    if (modalOverlay) modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Reactivar scroll
}


/* --- FUNCIONES STANDARD (Precios, Carrito) --- */

function updatePrice(productId) {
    const selectedRadio = document.querySelector(`input[name="decant-${productId}"]:checked`);
    if(selectedRadio) {
        const price = parseFloat(selectedRadio.getAttribute('data-price'));
        const priceEl = document.getElementById(`price-${productId}`);
        // Actualiza el precio visible (funciona tanto en grid principal como en modal)
        if(priceEl) priceEl.textContent = `$${price.toFixed(2)}`;
    }
}

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
    
    // Feedback visual simple
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

function filterProducts(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(event && event.target) event.target.closest('.filter-btn').classList.add('active');
    
    // Si filtra por 'trending', mostramos la colección
    if (cat === 'all') renderProducts(products.filter(p => !['prod-yara-rosa', 'prod-yara-moi', 'prod-asad'].includes(p.id))); 
    // Nota: El filtro de arriba es un ejemplo simple para no duplicar items en la home
    else renderProducts(products.filter(p => p.category === cat));
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
    
    // Reemplaza con tu número real
    const phone = "584120000000"; 
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

/* --- ESTILOS INYECTADOS (CSS en JS) --- */
/* Esto permite que el Modal se vea bien sin que tengas que editar el archivo style.css */
function injectModalStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.85);
            display: none; justify-content: center; align-items: center;
            z-index: 9999;
            backdrop-filter: blur(5px);
        }
        .modal-container {
            background: #111;
            width: 90%; max-width: 500px;
            height: 80vh;
            border: 1px solid #DAB469;
            border-radius: 10px;
            padding: 20px;
            position: relative;
            display: flex; flex-direction: column;
        }
        .modal-scroll-area {
            flex: 1; overflow-y: auto; padding-right: 10px;
        }
        .modal-close {
            position: absolute; top: 10px; right: 15px;
            background: none; border: none; color: white; font-size: 24px; cursor: pointer;
        }
        .modal-product-item {
            display: flex; gap: 15px; align-items: flex-start;
        }
        .modal-prod-img { width: 60px; height: 60px; background: #222; display: flex; align-items: center; justify-content: center; border-radius: 5px; }
        .modal-prod-details { flex: 1; }
        .modal-options-wrapper .decants-options {
            display: grid; grid-template-columns: 1fr 1fr; gap: 5px;
        }
        .modal-options-wrapper .decant-option {
            width: 100%; margin: 0; padding: 5px; font-size: 0.8em;
        }
    `;
    document.head.appendChild(style);
}