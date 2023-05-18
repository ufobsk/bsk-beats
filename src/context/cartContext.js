import { createContext, useState } from "react";

export const cartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  };

  return (
    <cartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
        { children }
    </cartContext.Provider>
  )
};

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
