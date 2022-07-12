const reducerFn = (state, action) => {
    switch (action.type) {
      case "LOW_TO_HIGH":
        return { ...state, sortBy: action.type };
      case "HIGH_TO_LOW":
        return { ...state, sortBy: action.type };
      case "MEN":
        return {
          ...state,
          category: {
            ...state["category"],
            men: !state.category.men
          }
        };
  
      case "WOMEN":
        return {
          ...state,
          category: {
            ...state["category"],
            women: !state.category.women
          }
        };
      case "DISCOUNTPRICE":
        return {
          ...state,
          discountPrice: action.discountPrice_value
        };
      case "DISCOUNT":
        return {
          ...state,
          discount: parseInt(action.value, 10)
        };
      case "CLEAR":
        return {
          sortBy: "",
          category: { men: false, women: false },
          discountPrice: 5000,
          discount: ""
        };
  
      default:
        return state;
    }
  };
  
  export { reducerFn };
  