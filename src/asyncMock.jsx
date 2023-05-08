const products = [
    {
        id: '1' , 
        name: 'Neptune', 
        price: 2000 ,
        img: '../img/firstimage.png',
        stock: 5, 
        description: 'Trap Beat',
        category: 'Beats'
    },
    {
        id: '2' , 
        name: 'Magician' , 
        price: 11000 ,
        img:  '../img/secondimage.png',
        stock: 8, 
        description: 'Trap Beat',
        category: 'Beats'

    },
    {
        id: '3' , 
        name: 'Forest' , 
        price: 5600 ,
        img: '../img/thirdimage.png',
        stock: 4, 
        description: 'Trap Beat',
        category: 'Beats'

    },
    {
        id: '4' , 
        name: 'Fusion' , 
        price: 8500 ,
        img: '../img/fourthimage.png' ,
        stock: 6, 
        description: 'Trap Beat',
        category: 'Beats'

    },
    {
        id: '5', 
        name: 'Darkin' , 
        price: 7500 ,
        img: '../img/fifthimage.png',
        stock: 3, 
        description: 'Trap Beat',
        category: 'Beats'

    },

    {
        id: '6', 
        name: 'ThunderWave' , 
        price: 450 ,
        img: '../img/vinilo.png',
        stock: 25, 
        description: 'Sample to make beats',
        category: 'Samples/Loops'

    },

    {
        id: '7', 
        name: 'Atmosphere' , 
        price: 450 ,
        img: '../img/vinilo.png',
        stock: 25, 
        description: 'Sample to make beats',
        category: 'Samples/Loops'

    },

    {
        id: '8', 
        name: 'Funcionality' , 
        price: 12600 ,
        img: '../img/vinilo.png',
        stock: 25, 
        description: 'Sample to make beats',
        category: 'Samples/Loops'

    },

    {
        id: '9', 
        name: 'Impulsion' , 
        price: 26750 ,
        img: '../img/vinilo.png',
        stock: 25, 
        description: 'Sample to make beats',
        category: 'Samples/Loops'

    },

    {
        id: '10', 
        name: 'News Eras Worlwide' , 
        price: 32450 ,
        img: '../img/vinilo.png',
        stock: 25, 
        description: 'Sample to make beats',
        category: 'Samples/Loops'

    },

    {
        id: '11', 
        name: 'Selection Kit' , 
        price: 45760,
        img: '../img/selectiondrumkit.png',
        stock: 25, 
        description: 'Clean Sound Packs',
        category: 'Drumkits'

    },

    {
        id: '12', 
        name: 'Clean Sound Selection' , 
        price: 370,
        img: '../img/selectiondrumkit.png',
        stock: 25, 
        description: 'Clean Sound Packs',
        category: 'Drumkits'

    },

    {
        id: '13', 
        name: 'Waves Clouds' , 
        price: 45760,
        img: '../img/selectiondrumkit.png',
        stock: 25, 
        description: 'Clean Sound Packs',
        category: 'Drumkits'

    },
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        } , 500)
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=> prod.id === productId))
        } , 500)
    });
};

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === category))
        } , 500)
    });
};