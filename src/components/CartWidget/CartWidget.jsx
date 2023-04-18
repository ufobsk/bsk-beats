import Badge from 'react-bootstrap/Badge';
import cart from './assets/cart.svg';

const styles = {
    img: {
        height: 30
    }
}

const CartWidget = () => {
    return (
        <Badge bg="warning" text="dark">
            <img src={cart} alt="cart-widget" style={styles.img}/>
            <span>0</span>
        </Badge>
    );
};

export default CartWidget;