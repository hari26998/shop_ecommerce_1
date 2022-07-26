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
import { mobile } from "../responsive";

const Container3=styled.div`
${mobile({display:"flex",flexDirection:"column",margin:"10px 20px" })};
display: ${props=> props.display};
justify-content: ${props=>props.justifyContent};
align-items: ${props=>props.alignItems};
// position:relative;
`;
const Container2=styled.div`
${mobile({ margin:"10px 10px"})}
// bottom:0;
// position:fixed;
// overflow-y:scroll;
// overflow-x:hidden;
`;
const Container = styled.div`
    // padding: 20px;
    padding-left:10px;
    display: flex;
    flex-wrap: wrap;
    align-items:flex-start;
    justify-content:space-between;
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
    

    <Container3 className="mobile_filter" display="flex" justifyContent="left"  alignItems="flex-start">
      <Container2 width="25%" >
        <ProductOperations />
      </Container2>
    

    
    <Container>
      {finalFilteredProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
    </Container3>
  );
};

export default Products