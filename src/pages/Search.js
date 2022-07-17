import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search"
import { useDispatch } from "react-redux";
import Product from "../components/Product";
import { Button, TextField } from "@mui/material";
import { mobile } from "../responsive";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;  
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container3=styled.div`
${mobile({ margin:"20px 0" })}

;`;
const Container=styled.div`
padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

const Container1 = styled.div`
// flex: 1;
margin: 5px;
padding:10px;
width: 200px;
height: 300px;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #f5fbfd;
position:relative;
&:hover ${Info}{
  opacity: 1;
}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 75%;
z-index: 2;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;
const Search = () => {
  const {products}=useSelector(state=>state.ProductsReducers)
  const dispatch=useDispatch();
  const [quantity, setQuantity] = useState(1);


  const [search, setSearch] = useState("");
  const submitHandler = () => {
    setSearch("");
  };

  const filteredProducts = products.filter((product) => {
    if (
      product.name.toUpperCase().includes(search) ||
      product.brand.toUpperCase().includes(search)
    ) {
      return product;
    }
  });

  return (
    
      <Container3>
<div  style={{display:"flex",margin:"15px 0"}}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            onClick={submitHandler}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
      
{ search.length!=0 
&&
<Container>
        {filteredProducts.map((product) => (
         <Product product={product}/>
          
        ))}
      </Container>}
      
    </Container3>
  );
};

export default Search;
