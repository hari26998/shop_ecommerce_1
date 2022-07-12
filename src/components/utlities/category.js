const getFliteredProducts = (sortedproducts, men, women) => {
    const filteredlist = [];
    if (men === false && women === false) {
      return sortedproducts;
    }
    if (men) {
      let newList = sortedproducts.filter(
        (item) => "men" === item.category.toLowerCase()
      );
  
      filteredlist.push(...newList);
    }
  
    if (women) {
      let newList = sortedproducts.filter(
        (item) => "women" === item.category.toLowerCase()
      );
  
      filteredlist.push(...newList);
    }
    console.log("filtered list", filteredlist);
    return filteredlist;
  };
  
  export { getFliteredProducts };
  