/* --- BASE DE DATOS DE PRODUCTOS --- */
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
            { ml: 15, price: 42.0
