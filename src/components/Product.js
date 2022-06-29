import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
  import styled from "styled-components";
  
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
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    padding:10px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
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
  
  const Product = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const dispatch=useDispatch()
    
    return (
      
      <Container>
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
      </Container>
    );
  };
  
  export default Product ;