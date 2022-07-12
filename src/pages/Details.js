import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import currencyFormatter from "currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
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

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
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
const Price1= styled.span`
text-decoration: line-through;
margin:10px;`;

const Price2= styled.span``;

const Details = () => {
  const {product}=useSelector(state=>state.ProductsReducers)
  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch()
  const {id}=useParams();


  useEffect(() => {
    window.scroll(0, 0);
    dispatch({type:'PRODUCT',id})
    
  }, [id])

  const decQuantity = () => {
    if(quantity > 1) {
        setQuantity(quantity-1)
    }
}

  return (
    
    <Container>
      
      {/* <Announcement /> */}
      <Wrapper>
        <ImgContainer>
          <Image src={`/images/${product.image}`}  />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>
          <Price1><span>{currencyFormatter.format(product.price, { code: 'INR' })}</span></Price1>

             <Price2><span>{currencyFormatter.format(product.discountPrice, { code: 'INR' })}</span></Price2>
          </Price>
             
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
          <AddContainer>
            <AmountContainer>
              <Remove onClick={decQuantity}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => setQuantity(quantity+1)} />
            </AmountContainer>
            <Button onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})}>
              ADD TO CART
            </Button>
            <Button onClick={()=>dispatch({type:'ADD_TO_WISHLIST',payload:{product,quantity}})}>
              ADD TO WISHLIST
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Details;