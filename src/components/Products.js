import styled from "styled-components";
import Product from "./Product";
  import { ProductOperations } from "../ProductOperations";
  import { useProduct } from "../ProductContext";
  import { productData } from "./data";
  import {
    getSortedProducts,
    getPricedProducts,
    getDiscountedProducts,
    getFliteredProducts
  } from "./utlities";
import { flexbox } from "@mui/system";
import { mobile } from "../responsive";

const Container3=styled.div`
${mobile({display:"flex",flexDirection:"column" })}
`;
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
    
`;


const Products = () => {

  const { state } = useProduct();
  
    const pricedProducts = getPricedProducts(
      productData.productList,
      state.discountPrice
    );
    const discountedProducts = getDiscountedProducts(
      pricedProducts,
      state.discount
    );
    const categoryProducts = getFliteredProducts(
      discountedProducts,
      state.category.men,
      state.category.women
    );
    const finalFilteredProducts = getSortedProducts(
      categoryProducts,
      state.sortBy
    );

 
 

  return (
    <Container3 className="mobile_filter" style={{display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
    <ProductOperations />

    
    <Container>
      {finalFilteredProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
    </Container3>
  );
};

export default Products