import "../../App.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import CartiItem from "../CartItem/CartiItem";
import { Link } from "react-router-dom";

const Cart = (CartItem) => {
    const { cart, clearCart, totalQuantity, total} = useContext(cartContext)

    if(totalQuantity === 0) {
        return (
            <div>
            <h1>No hay items en el carrito</h1>
            <Link to='/' className="Option">Productos</Link>
        </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">checkout</Link>
        </div>
    )
}