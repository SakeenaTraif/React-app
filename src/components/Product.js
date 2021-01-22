import styles from "../styles";

const Product = (props) => {
    const product = props.product;
    
    return (
        <div style={styles.device}>
        <img src={product.image} alt={product.name} style={styles.deviceImage}/><br></br>
         <strong>{product.DeviceName}</strong>
         <p style={styles.text}>Price: {product.Price}</p>
         </div>
 );   
}

export default Product;
