import { Slide, toast } from "react-toastify";

const initState = {
    products: [],
    totalQuantities1: 0
   
}

const WishListReducer=(state=initState,action)=>{ 
let findPro1;

    switch(action.type){
        case 'ADD_TO_WISHLIST':
            const {product,quantity} = action.payload;
            const check = state.products.find(pr => pr.id === product.id);
            if(check){
                return state;
            } else {
                const Tprice = state.totalPrice + product.discountPrice * quantity;
                const Tquantities = state.totalQuantities1 + quantity;
                toast.dark("ITEM ADDED TO WISHLIST",{
                    transition: Slide,
                    position:"top-center",
                    autoClose:750,
                    hideProgressBar: true,
                   
    
                });
                product.quantity = quantity;
                return {
                    ...state, products: [...state.products, product],totalPrice: Tprice, totalQuantities1: Tquantities 
                }}
               
                

                case 'REMOVEWL':
                    const findPro1 = state.products.find(product => product.id === action.payload);
                     const filtered = state.products.filter(product => product.id !== action.payload);
                     toast.dark("ITEM REMOVED FROM WISHLIST",{
                        transition: Slide,
                        position:"top-center",
                        autoClose:750, 
                        hideProgressBar: true,
        
                    });
                     return {
                         ...state,
                         products: filtered,
                         totalPrice: state.totalPrice - findPro1.discountPrice * findPro1.quantity, totalQuantities1: state.totalQuantities1 - findPro1.quantity
                     }
        default:
            return state ;
    }

}

export default WishListReducer