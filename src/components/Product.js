import {Device, ProductWrapper } from "../styles";

const Product = (props) => {
    const product = props.product;

    return (
    
        <Device>
            <img src={product.image} alt={product.name}/>
         <p>{product.DeviceName}</p>
         <p className="price">Price: {product.Price}</p>
         </Device>
 );   
}

export default Product;
