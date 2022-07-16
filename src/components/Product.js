import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import currencyFormatter from 'currency-formatter';
import { BsFillXCircleFill } from "react-icons/bs";


import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./product.css"
import styled from "styled-components";
import { mobile } from "../responsive";
const Container2=styled.div`
z-index:0;
`;
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
  overflow:hidden;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  overflow:hidden;
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
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const FilterContainer = styled.div`
  width: 100%;
  margin:  0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch=useDispatch()


  return(  
    <body style={{border:"1px solid black",marginBottom:"10px",display:"flex",justifyContent:"space-evenly"}}>
    <div class="hero-container">
      <div class="main-container">
        <div class="poster-container">
          <a href="#">
          <Link to={`/details/${product.id}`}><img src={`/images/${product.image}`} alt="product image" class="poster" /></Link></a>
        <div style={{textTransform:"uppercase",fontWeight:"bold"}}> {product.brand}</div>
          <div className="product__name" >
              <span >{product.name}</span>
             <span>
             <FilterContainer>
          <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          </span> 
              {/* <span className="size">{product.size}</span>  */}
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="product__price">
                    <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'INR' })}</span> 
                    <span className="discount">{product.discount}%</span>

                    </div>
                   
                   
                </div>
                   <div className="col-6">
                       <div className="product__discount__price">
                           {currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                       </div>
                   </div>
                   <button className="btn-default" onClick={()=>dispatch({type:'ADD_TO_WISHLIST',payload:{product,quantity}})} >add to wishlist</button>
                   <button className="btn-default" onClick={()=>dispatch({type:"ADD_TO_CART",payload:{product,quantity}})}>add to cart</button>
            </div>
       
       
      </div>
  </div>
  </div>
      </body>

   
  
  /* //   <div style={{ border:"1px solid black",margin:"10px",boxshadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"}}>
  //     <div>
  //       <img style={{border:"1px solid black"}}src={`/images/${product.image}`} alt="image name"/>
  //     </div>
  //     <div style={{display:"flex",justifyContent:"space-between"}}>
  //       <span style={{textTransform:"uppercase"}}>{product.brand}</span>
  //       <span style={{textTransform:"uppercase"}}>{product.name}</span>
  //     </div>
  //     <div style={{display:"flex",justifyContent:"space-between"}}>
  //       <div style={{display:"flex",justifyContent:"flex-start"}}>
  //       <span style={{textDecoration:"line-through"}}>RS{product.price}</span>
  //       <span>{product.discount}%</span>
  //       </div>
  //       <div>{product.discountPrice} </div>
  //     </div>
  //   </div> */  
  /* // 
  
  // return (
  //   <Container2>
  //   <Container>
  //     <Circle/>
  //     <Image src={`/images/${product.image}`} alt="image name"/>
      {/* <div> {product.brand}</div> */
  //     <Info>
  //       <Icon>
  //         <ShoppingCartOutlined  onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})} />
  //       </Icon>
  //       <Link to={`/details/${product.id}`}><Icon>
  //         <SearchOutlined/>
  //       </Icon></Link>
  //       <Icon>
  //         <FavoriteBorderOutlined  onClick={()=>dispatch({type:'ADD_TO_WISHLIST',payload:{product,quantity}})}/>
  //       </Icon>
  //     </Info>
  //   </Container>
  //   </Container2>
  // ); */}
)};

export default Product ;