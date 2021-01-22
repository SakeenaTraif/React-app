import products from "../products";
import {List } from "../styles";

import Product from "./Product";

const ProductsList = () => {
    
    const productsList = products.map((product) => {
        return <Product key={product.id} product={product}/>;
});
       return <List>{productsList}</List>;
        };

export default ProductsList;