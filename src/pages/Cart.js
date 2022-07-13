import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import currencyFormatter from "currency-formatter";
import { useState } from "react";
import Newsletter from "../components/Newsletter";


const Container = styled.div`
margin-top: 100px`;

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

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
cursor:pointer;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch()
  const {products,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
  const [amount, setAmount] = useState(totalPrice)
        const[cart,setCart]=useState(products.length)
        const[price,setPrice]=useState(totalPrice)
        const handleSubmit=(e)=>{
          e.preventDefault();
            var options = {
              key: "rzp_test_Pq4xjXI56Z8zpl",
              key_secret:"yZFL16k0xYfMRvuvJJdXi59L",
              amount:amount *100 ,
              currency:"INR",
              name:"STARTUP_PROJECTS",
              description:"for testing purpose",
              handler: function(response){
                alert(response.razorpay_payment_id);
                dispatch({type:'CLEARCART'})
               
            },
              prefill: {
                name:"Velmurugan",
                email:"mvel1620r@gmail.com",
                contact:"7904425033"
              },
              notes:{
                address:"Razorpay Corporate office"
              },
              theme: {
                color:"#3399cc"
              }
            };
            var pay = new window.Razorpay(options);
            pay.open();

        setCart("")
        setPrice("")
        }

  return (
    <Container>
      <Wrapper>
        <Title>YOUR CART DETAILS</Title>
        {cart > 0? <>
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
                <ProductAmountContainer>
                 <span> <Remove style={{cursor:'pointer'}}  onClick={() => dispatch({type: 'DEC', payload: product.id})} /></span>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <span ><Add style={{cursor:'pointer'}}onClick={() => dispatch({type: 'INC', payload: product.id})}/></span>
                </ProductAmountContainer>
                <ProductPrice>
                    {currencyFormatter.format(product.discountPrice, {code: 'INR'})}
               </ProductPrice>
               <ProductSize>
               <b>SubTotal:</b><ProductPrice1>{currencyFormatter.format(product.discountPrice * product.quantity, {code: 'INR'})}</ProductPrice1>
               </ProductSize>
               <button style={{border:"1px solid black",color:"white",backgroundColor:"black",cursor:"pointer"}} onClick={()=>dispatch({type:'ADD_TO_WISHLIST',payload:{product,quantity}})}>ADD TO WISHLIST</button>
               <button style={{width:"124px",marginTop:"10px",border:"1px solid black",color:"white",backgroundColor:"black",cursor:"pointer"}} onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>REMOVE</button>
              </PriceDetail>
            </Product>
            <Hr />
            
            
            </div>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total Items</SummaryItemText>

              <SummaryItemPrice>      
              {totalQuantities}
             </SummaryItemPrice>
            </SummaryItem>
            
            
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>  {currencyFormatter.format(totalPrice, {code: 'INR'})}</SummaryItemPrice>
            </SummaryItem>
            <Button  onClick={handleSubmit}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
        </>:"Your Cart is empty "}
      </Wrapper>
      <Newsletter/>
      <Footer />
    </Container>
  );
};

export default Cart;