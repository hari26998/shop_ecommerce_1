import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50px;
  width:100%;
  background:white;
  display:flex
  ${mobile({ height: "40px",
zindex:"1" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  // border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  // padding: 5px;
`;
const Button = styled.div`
color:black;
  padding:0;
  width:30px;
  height:10px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
  ${mobile({ height:'20px' })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
color:black;
width:100px
text-Decoration:none;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
display:flex;
textDecoration:none
  color:black;
  font-size: 14px;
  cursor: pointer;
  margin: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const MenuItem1 = styled.div`
color:black;
margin:10px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const {totalQuantities}=useSelector(state=>state.CartReducer)
  const {totalQuantities1}=useSelector(state=>state.WishListReducer)


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>

           <Link to="/searchproducts" style={{textDecoration:'none'}}><Button>SEARCH</Button></Link> 
            {/* <Search style={{ color: "gray", fontSize: 16 }} /> */}
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{textDecoration:'none'}}><Logo > HOME</Logo></Link>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <Link to="/login" style={{textDecoration:'none'}} >
          <MenuItem >SIGN IN</MenuItem>
          </Link>
          <MenuItem1>
            <Badge style={{color:'teal'}} badgeContent={totalQuantities} color="primary">
              <Link to="/cart"><ShoppingCartOutlined style={{color:'black'}} /></Link>
            </Badge>
            <Badge style={{color:'teal'}} badgeContent={totalQuantities1} color="primary">
             <Link to="/wishlist"><FavoriteBorderIcon style={{color:'black'}}/></Link>
            </Badge>
          </MenuItem1>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;