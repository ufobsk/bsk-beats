import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)

    if(totalQuantity === 0) {
        return(
            <div>
                <h3>No tenés productos agregados al carrito</h3>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    return (
        <div>
            <h3>Resumen de tu compra</h3>
            {cart.map(p =>  <CartItem key={p.id}{...p} handleRemoveItem={handleRemoveItem}/>)}
            <h4>Total: ${total}</h4>
            <button onClick={() => clearCart()} className='Option'>Limpiar Carrito</button>
            <Link to='/checkout' className='Option'>Ir a pagar</Link>
        </div>
    )
}

export default Cart