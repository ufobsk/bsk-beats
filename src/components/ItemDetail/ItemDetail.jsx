import "../../App.css";
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(cartContext)

    const onAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
    
    return (
        <article className="CardItemDetail" >
            <header className="Header" >
                <h2 className="ItemHeader"> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoría: {category} </p>
                <p className="Info">Descripción: {description} </p>
                <p className="Info">Precio: $USD{price} </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
            </footer>
        </article>                                                       
    )
};

export default ItemDetail;