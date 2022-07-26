import React from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div`
padding:20px;
${mobile({ width: "50%" })}
`;


const Home = () => {

  
  return (
    <div style={{margin:"5px"}}>
      <Container>
      <ToastContainer style={{position:"fixed",zIndex:"999999"}}/>
      </Container> 
     
      <Banner/>
      <Products />
      <Footer/>
     </div>
  );
};

export default Home;