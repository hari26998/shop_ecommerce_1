import { createContext, useContext, useReducer } from "react";
import { reducerFn } from "./reducer";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, {
    sortBy: "",
    category: { men: false, women: false },
    discountPrice: 5000,
    discount: ""
  });
 
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
