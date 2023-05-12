import { createContext } from "react";

const cartContext = createContext([]);

export const CartProvider = ({ children }) => (
    <cartContext.Provider value={{
    }}>
        ({children})
    </cartContext.Provider>
);


/* Metodos recomendados para el Cart Context

addItem(item, quantity) => agregar cierta cantidad d un ítem al carrito
removeItem(itemId) => remover un item del cart por usando su id
clear() => remover todos los items
islnCart: (id) => true|false */

/* Ejemplo?

import { createContext, useState } from 'react';
export const CartContext = createContext();
const CartContextProvider = ({ childrem }) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = (item, quantity) => { implementa la funcionalidad para agregar un producto al carrito
    } 
    const removeList = () { implementa la funcionalidad para dejar el carrito vacio
    }
    const deleteItem = (id) => { implementa la funcionalidad para borrar un producto del carrito
    }
    return (
        <CartContext.Provider value={{carList, addToCart, removeList, deleteItem}}>
            { children }
        </CartContext.Provider>
    );
}
export default CartContextProvider;

*/