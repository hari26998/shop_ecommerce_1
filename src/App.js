
import Details from "./pages/Details";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.js"
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Announcement from './components/Announcement';
import styled from 'styled-components';
import Footer from './components/Footer';

import store from "./store"
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Wishlist from "./pages/WishList";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Search from "./pages/Search";
// const Container= styled.div`
// `;
// const Wrapper= styled.div`
// padding:20px;`;

// const Title= styled.h1`
// font-weight:300;
// text:align:center;
// `;
// const Top= styled.div`
// display:flex;
// align-items:center;
// justify-content:space-between;
// `;
// const TopButton= styled.button`
// padding:20px;
// fontWeight:600;
// `;
// const Bottom= styled.div``;

// const TopTexts= styled.div`

// `;
// const TopText= styled.span`
// text-decoration:underline;
// cursor:pointer;
// margin:0 10px;
// `;



const App = () => {
  return(
    <Router>
    <Provider store={store}>
      <div><Navbar/></div>
      
    
          <Route path="/" exact component={Home}/>
          <Route path="/details/:id" exact component={Details}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/wishlist" exact component={Wishlist}/>
          <Route path="/login" exact component={Login} />
          <Route path="/searchproducts" exact component={Search}/>

    </Provider>
    </Router>
  //   <Container>
  //     <Navbar/>
  //     <Announcement/>
  //     <Wrapper>
  //       <Title>
  //         YourBag 
  //       </Title>
  //       <Top>
  //         <TopButton>CONTINUE SHOPPING</TopButton>
  //         <TopTexts>
  //           <TopText>ShoppingBag(2)</TopText>
  //           <TopText>Your Wishlist(0)</TopText>

  //         </TopTexts>
  //       </Top>
  //       <Bottom></Bottom>

  //     </Wrapper>
  //     <Footer/>

  //   </Container>
  // )
  )
};

export default App;