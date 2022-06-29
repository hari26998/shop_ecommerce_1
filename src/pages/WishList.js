
import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";


const Container = styled.div``;


const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  {mobile({ marginBottom: "20px" })}
`;

const ProductPrice1= styled.div`
font-size: 30px;
  font-weight: 200;
  {mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Wishlist = () => {
    const {products,totalQuantities,totalPrice} = useSelector(state => state.WishListReducer);
    const dispatch = useDispatch();
    
     const [amount, setAmount] = useState(totalPrice)
     const[wishlist,setWishlist]=useState(products.length)
     const {product}=useSelector(state=>state.ProductsReducer)
     const [quantity, setQuantity] = useState(1);
     
       
    return (
        <Container>
      
      <Announcement />
      <Wrapper>
        <Title>YOUR WISHLIST DETAILS</Title>
        {wishlist > 0? <>
        <Bottom>
          <Info>
            {products.map(product=>(<div>
            <Product>
              <ProductDetail>
                <Image src={`/images/${product.image}`} alt="/"/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.name}
                  </ProductName>
                
                  
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
               <ProductPrice>
                    {currencyFormatter.format(product.discountPrice, {code: 'INR'})}
               </ProductPrice>
               <Button onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})}> MOVE TO CART</Button>

             </PriceDetail>
            </Product>
            <Hr />
            
            
            </div>
            ))}
          </Info>
          
        </Bottom>
        </>:"Your WishList is empty "}
      </Wrapper>
      <Footer />
    </Container>
  );
};



export default Wishlist;













     