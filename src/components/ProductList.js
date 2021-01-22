import products from "../products";
import styles from "../styles";
import Product from "./Product";

const ProductsList = () => {
    
    const productsList = products.map((product) => {
        return <Product key={product.id} product={product}/>;
});
       return <div style={styles.list}>{productsList}</div>;
        };

export default ProductsList;