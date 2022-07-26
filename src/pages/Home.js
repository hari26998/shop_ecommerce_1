import React from "react";
import { ToastContainer } from "react-toastify";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Home = () => {

  
  return (
    <div>
      <ToastContainer style={{position:"fixed",zIndex:"999999"}}/>
      <Banner/>
      <Products />
      <Footer/>
     </div>
  );
};

export default Home;