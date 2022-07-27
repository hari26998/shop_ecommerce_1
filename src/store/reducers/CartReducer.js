import {Slide, toast} from "react-toastify"
import { withTheme } from "styled-components";

const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initState, action) => {
    let findPro;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
        const {product,quantity} = action.payload;
        const check = state.products.find(pr => pr.id === product.id);
        if(check){
            return state;
        } else {
            const Tprice = state.totalPrice + product.discountPrice * quantity;
            const Tquantities = state.totalQuantities + quantity;
            product.quantity = quantity;
            toast.dark("ITEM ADDED TO CART",{
                transition: Slide,
                position:"top-center",
                autoClose:750, 
                hideProgressBar: true,
                

            });
            return {
                ...state, products: [...state.products, product],totalPrice: Tprice, totalQuantities: Tquantities 
            }

        }
        case 'INC':
          findPro = state.products.find(product => product.id === action.payload);
          index = state.products.findIndex(product => product.id === action.payload);
          findPro.quantity += 1;
          state.products[index] = findPro;
          toast.dark("ITEM INCREMENTED",{
            transition: Slide,
            position:"top-center",
            autoClose:750, 
            hideProgressBar: true,

        });
          return {
              ...state,
              totalPrice: state.totalPrice + findPro.discountPrice, totalQuantities: state.totalQuantities+1
          }
        case "DEC":
        findPro = state.products.find(product => product.id === action.payload);
        index = state.products.findIndex(product => product.id === action.payload);
        if(findPro.quantity > 1){
           findPro.quantity -= 1;
           state.products[index] = findPro;
           toast.dark("ITEM DECREMENTED",{
            transition: Slide,
            position:"top-center",
            autoClose:750, 
            hideProgressBar: true,
            closeButton:false,

        });
           return {
               ...state,
               totalPrice: state.totalPrice - findPro.discountPrice, totalQuantities: state.totalQuantities - 1
           }
        } else {
            return state;
        }
        case 'REMOVE':
        findPro = state.products.find(product => product.id === action.payload);
        const filtered = state.products.filter(product => product.id !== action.payload);
        toast.dark("ITEM REMOVED FROM CART",{
            transition: Slide,
            position:"top-center",
            autoClose:750, 
            hideProgressBar: true,

        });
        return {
            ...state,
            products: filtered,
            totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
        }
                        case 'CLEARCART':
                            toast.dark("CART CLEARED",{
                                transition: Slide,
                                position:"top-center",
                                autoClose:750, 
                                hideProgressBar: true,

                            });
                        return{
                            ...state,
                            products:[],
                            totalQuantities:0,
                            totalPrice:0
                        }
                         
                       



            default: 
            return state;
        }}
       

        export default CartReducer