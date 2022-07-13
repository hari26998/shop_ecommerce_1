
import Details from "./pages/Details";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.js"
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/WishList";
import Search from "./pages/Search";
import store from "./store"
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route } from "react-router-dom";
import "./App.css"





const App = () => {
  return(
    <Router>
    <Provider store={store}>
      {/* <Header/>       */}
    <Navbar/>
          <Route path="/" exact component={Home}/>
          <Route path="/details/:id" exact component={Details}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/wishlist" exact component={Wishlist}/>
          <Route path="/login" exact component={Login} />
          <Route path="/searchproducts" exact component={Search}/>

    </Provider>
    </Router>
  )
};

export default App;