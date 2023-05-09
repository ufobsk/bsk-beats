const products = [
    {
        id: '1' , 
        name: 'Neptune', 
        price: 20 ,
        img: '../img/firstimage.png',
        stock: 5, 
        description: 'Trap Beat',
        category: 'Beats'
    },
    {
        id: '2' , 
        name: 'Magician' , 
        price: 25 ,
        img:  '../img/secondimage.png',
        stock: 8, 
        description: 'Trap Beat',
        category: 'Beats'

    },
    {
        id: '3' , 
        name: 'Forest' , 
        price: 30 ,
        img: '../img/thirdimage.png',
        stock: 4, 
        description: 'Trap Beat',
        category: 'Beats'

    },
    {
        id: '4' , 
        name: 'Fusion' , 
        price: 20 ,
        img: '../img/fourthimage.png' ,
        stock: 6, 
        description: 'Trap Beat',
        category: 'Beats'

    },
    {
        id: '5', 
        name: 'Darkin' , 
        price: 40 ,
        img: '../img/fifthimage.png',
        stock: 3, 
        description: 'Trap Beat',
        category: 'Beats'

    },

    {
        id: '6', 
        name: 'ThunderWave' , 
        price: 15 ,
        img: '../img/vinilo.png',
        stock: 6, 
        description: 'Sample to make beats',
        category: 'Samples'

    },

    {
        id: '7', 
        name: 'Atmosphere' , 
        price: 18 ,
        img: '../img/vinilo.png',
        stock: 8, 
        description: 'Sample to make beats',
        category: 'Samples'

    },

    {
        id: '8', 
        name: 'Funcionality' , 
        price: 10 ,
        img: '../img/vinilo.png',
        stock: 5, 
        description: 'Sample to make beats',
        category: 'Samples'

    },

    {
        id: '9', 
        name: 'Impulsion' , 
        price: 20 ,
        img: '../img/vinilo.png',
        stock: 9, 
        description: 'Sample to make beats',
        category: 'Samples'

    },

    {
        id: '10', 
        name: 'News Eras Worlwide' , 
        price: 16 ,
        img: '../img/vinilo.png',
        stock: 7, 
        description: 'Sample to make beats',
        category: 'Samples'

    },

    {
        id: '11', 
        name: 'Selection Kit' , 
        price: 35,
        img: '../img/selectiondrumkit.png',
        stock: 13, 
        description: 'Clean Sound Packs',
        category: 'Drumkits'

    },

    {
        id: '12', 
        name: 'Clean Sound Selection' , 
        price: 45,
        img: '../img/selectiondrumkit.png',
        stock: 18, 
        description: 'Clean Sound Packs',
        category: 'Drumkits'

    },

    {
        id: '13', 
        name: 'Waves Clouds' , 
        price: 55,
        img: '../img/selectiondrumkit.png',
        stock: 20, 
        description: 'Clean Sound Packs',
        category: 'Drumkits'

    },
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        } , 500)
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod=> prod.id === productId))
        } , 500)
    });
};

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter((prod) => prod.category === category))
        } , 500)
    });
};