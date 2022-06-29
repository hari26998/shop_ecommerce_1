import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
  const {products}=useSelector(state=>state.ProductsReducer);
  const dispatch=useDispatch();
  const [quantity, setQuantity] = useState(1);


  const [search, setSearch] = useState("");
  const submitHandler = () => {
    setSearch("");
  };

  const filteredProducts = products.filter((product) => {
    if (
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search)
    ) {
      return product;
    }
  });

  return (
    <div className="searchBarSection">
      <div className="searchBar">
        <input
          type="text"
          className="input"
          placeholder="enter your item"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" className="button" onSubmit={submitHandler}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
{ search.length!=0 
&&
<Container>
        {filteredProducts.map((product) => (
          <Container1>
          <Circle/>
          <Image src={`/images/${product.image}`} alt="image name"/>
          <Info>
            <Icon>
              <ShoppingCartOutlined  onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})} />
            </Icon>
            <Link to={`/details/${product.id}`}><Icon>
              <SearchOutlined/>
            </Icon></Link>
            <Icon>
              <FavoriteBorderOutlined  onClick={()=>dispatch({type:'ADD_TO_WISHLIST',payload:{product,quantity}})}/>
            </Icon>
          </Info>
        </Container1>
          
        ))}
      </Container>}
      
    </div>
  );
};

export default Search;
