// Base de datos de perfumes
const products = [
    {
        id: 1,
        name: "Santal 33",
        brand: "Le Labo",
        price: 180.00,
        category: "niche",
        image: "🌿",
        description: "Un clásico de culto con notas de sándalo, cedro, cardamomo y violeta."
    },
    {
        id: 2,
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        price: 325.00,
        category: "trending",
        image: "💎",
        description: "Luminoso y sofisticado, con brisa floral de jazmín y azafrán."
    },
    {
        id: 3,
        name: "Oud for Greatness",
        brand: "Initio",
        price: 290.00,
        category: "niche",
        image: "⚫",
        description: "Oud natural con una firma olfativa majestuosa y texturizada."
    },
    {
        id: 4,
        name: "Khamrah",
        brand: "Lattafa",
        price: 45.00,
        category: "arabic",
        image: "🥃",
        description: "Dulce, especiado y cálido. Notas de canela, nuez moscada y dátiles."
    },
    {
        id: 5,
        name: "Angels' Share",
        brand: "Kilian",
        price: 230.00,
        category: "trending",
        image: "🥃",
        description: "La esencia del cognac derivada en un perfume cálido y elegante."
    },
    {
        id: 6,
        name: "Asad",
        brand: "Lattafa",
        price: 35.00,
        category: "arabic",
        image: "🦁",
        description: "Una fragancia masculina potente con pimienta negra, tabaco y café."
    }
];

// Estado del carrito
let cart = [];

// Cargar productos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
});

// Función para mostrar productos
function renderProducts(category) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = ''; // Limpiar grid

    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image" style="font-size: 80px; display: flex; align-items: center; justify-content: center; height: 200px; background: #f5f5f5;">${product.image}</div>
            <div class="product-info">
                <span class="product-category">${product.brand}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Actualizar botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase().includes(category === 'all' ? 'todos' : category)) {
            btn.classList.add('active');
        }
    });
}

// Filtrar productos
function filterProducts(category) {
    renderProducts(category);
}

// Añadir al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    toggleCart(); // Mostrar carrito al añadir
}

// Actualizar interfaz del carrito
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price} x ${item.quantity}</p>
            </div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartCount.textContent = count;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Abrir/Cerrar carrito
function toggleCart() {
    const panel = document.getElementById('cart-panel');
    panel.classList.toggle('active');
}

// Scroll suave
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function checkout() {
    if(cart.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }
    alert("¡Gracias por tu compra! Esta es una demo.");
    cart = [];
    updateCartUI();
    toggleCart();
}
