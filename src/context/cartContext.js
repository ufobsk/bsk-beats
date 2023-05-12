import { createContext } from "react";

const cartContext = createContext([]);

export const CartProvider = ({ children }) => (
    <cartContext.Provider value={{
    }}>
        ({children})
    </cartContext.Provider>
);