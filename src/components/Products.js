import styled from "styled-components";
import {useSelector} from "react-redux"
import Product from "./Product";
import { useEffect, useState } from "react";
import Filter from "./Filter";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
    
`;


const Products = () => {
  const{products}=useSelector(state=>state.ProductsReducer)
  const [product1, setProduct1] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  useEffect(() => {
    setProduct1(products);
    setFilteredProducts(products);
  }, []);

  useEffect(() => {
    const filtered = selectedBrand
      ? product1.filter((item) => item.brand === selectedBrand)
      : product1;

    setFilteredProducts(
      sortBy
        ? [...filtered].sort((a, b) =>
            sortBy === "lowest" ? a.price - b.price : b.price - a.price
          )
        : [...filtered].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  }, [selectedBrand, sortBy, product1]);
 

  return (
    <div>
    
    <div> 

    
    <Filter
    handleSort={setSortBy}
    handleTagChange={setSelectedBrand}
    selectedTag={selectedBrand}
    sortBy={sortBy}/>
    </div>
    
    <Container>
      
      {filteredProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
    </div>
  );
};

export default Products;