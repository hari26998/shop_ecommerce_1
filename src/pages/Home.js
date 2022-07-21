import React from "react";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products"; 
import ScrollButton from "../ScrollButton";
const Home = () => {

  
  return (
    <div>
      {/* <button onClick={notify}>toast</button> */}
      
   
      {/* <Announcement/> */}
      <Banner/>
      <Products />
      <Footer/>
      {/* <ScrollButton/> */}
    </div>
  );
};

export default Home;