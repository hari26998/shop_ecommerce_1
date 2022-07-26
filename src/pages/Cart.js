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
import {toast, ToastContainer} from "react-toastify"


const Container = styled.div`
margin-top: 100px;
${mobile({ margin: "10px" })}
`;

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
  ${mobile({ 
    padding:"10px",
    
    flexDirection: "column" })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ 
    margingright:"10px",
    flexDirection: "column" })}
`;

const Product1 = styled.div`
${mobile({ 
padding:0,
width:"100%" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
   display:"flex",
    flexDirection:"column", 
    // padding:"10px",
    // margintop:"10px"
  })}
`;

const Image = styled.img`
  width: 200px;
  ${mobile({
    margin:"50px"
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({
    display:"flex",
    flexDirection:"column"
  })}
`;

const ProductName = styled.span`
${mobile({
  margin:"0 50px"
})}`;

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
  ${mobile({margin:"0 50px"})}

`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 16px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  {mobile({ marginBottom: "20px" })}
`;

const ProductPrice1= styled.div`
font-size: 20px;
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
  ${mobile({margin:"0 50px"})}
`;

const FilterTitle = styled.span`
  font-size: 16px;
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


const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch()
  const {products,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
  // const [amount, setAmount] = useState(totalPrice)
        const[cart,setCart]=useState(products.length)
        const[price,setPrice]=useState(totalPrice)
        const handleSubmit=(e)=>{
          e.preventDefault();
          // console.log(amount)
            var options = {
              key: "rzp_test_Pq4xjXI56Z8zpl",
              key_secret:"yZFL16k0xYfMRvuvJJdXi59L",
              amount:totalPrice *100 ,
              currency:"INR",
              name:"STARTUP_PROJECTS",
              description:"for testing purpose",
              handler: function(response){
                alert(response.razorpay_payment_id);
                toast.dark("TRANSACTION SUCCESSFUL",{
                  position:"top-left",
                  autoClose:1500, 
                  hideProgressBar: true,
      
              });
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
        // setAmount(0)
        }

  return (
    
    <Container>
      <ToastContainer/>
      <Wrapper>
        <Title>YOUR CART DETAILS</Title>
        {cart > 0? <>
        <Bottom>
          <Info style={{border:"1px solid black",padding:"15px"}}>
            {products.map(product=>(
            <Product1>
            <Product>
              <ProductDetail>
                <Image src={`/images/${product.image}`} alt="/"/>
                <Details>
                  <ProductName style={{textTransform:"capitalize"}}>
                    <b style={{fontSize:"16px"}}>PRODUCT:</b> 
                    {product.name}
                  </ProductName>
                  <FilterContainer>
          <Filter>
              <FilterTitle style={{fontWeight:"bold"}}>SIZE:</FilterTitle>
              <FilterSize>
                
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
                  
                  {/* <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize> */}
                </Details>
              </ProductDetail>
              <PriceDetail>
                <p style={{fontWeight:"bold"}}>NO OF PRODUCTS:</p>
                <ProductAmountContainer style={{border:"1px solid black",margin:"2px"}}>
              
                 <span> <Remove style={{cursor:'pointer'}}  onClick={() => dispatch({type: 'DEC', payload: product.id})} /></span>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <span ><Add style={{cursor:'pointer'}}onClick={() => dispatch({type: 'INC', payload: product.id})}/></span>
                </ProductAmountContainer>
               <p style={{fontWeight:"bold"}}>PRODUCT PRICE:</p>
                <ProductPrice>
                    {currencyFormatter.format(product.discountPrice, {code: 'INR'})}
               </ProductPrice>
               <ProductSize>
               <b>SUBTOTAL:</b><ProductPrice1>{currencyFormatter.format(product.discountPrice * product.quantity, {code: 'INR'})}</ProductPrice1>
               </ProductSize>
               <button style={{border:"1px solid black",color:"white",backgroundColor:"black",cursor:"pointer"}} onClick={()=>{dispatch({type: 'ADD_TO_WISHLIST', payload:{product,quantity}});dispatch({type: 'REMOVE', payload: product.id})}}>ADD TO WISHLIST</button>
               <button style={{width:"124px",marginTop:"10px",border:"1px solid black",color:"white",backgroundColor:"black",cursor:"pointer"}} onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>REMOVE</button>
              </PriceDetail>
            </Product>
            <Hr />
            
            
            </Product1>
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
      {/* <Newsletter/> */}
      <Footer style={{margin:"150px",position:"fixed"}} />
    </Container>
  );
};

export default Cart;