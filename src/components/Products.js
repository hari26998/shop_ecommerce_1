import styled from "styled-components";
import {useSelector} from "react-redux"
import Product from "./Product";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
    
`;


const Products = () => {
  const {products}= useSelector(state=>state.ProductsReducer)

  return (
   
    
    <Container>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;