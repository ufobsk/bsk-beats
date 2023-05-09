import "../../App.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams, useLocation } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams()
    const location = useLocation()
    const isRoot = location.pathname === '/'

    useEffect(() => {
        const asyncFunc = categoryId ? () => getProductsByCategory(categoryId) : getProducts

        asyncFunc().then((response) => {
            setProducts(response)
        });
    
    }, [categoryId]);
    
    return (
        <div>
            { isRoot ? (
                <>
                    <h1 className="greeting">{greeting}</h1>
                    <br />
                    <h2 id="greetingHome">The best beats in Argentina are here!</h2>
                    <section id="SectionHome">
                        <img src="img/studio1.jpg" alt="Studio" />
                        <img src="img/studio2.jpeg" alt="Studio" />
                        <img src="img/studio3.jpg" alt="Studio" />
                    </section>
                </>
            ) : null }
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;