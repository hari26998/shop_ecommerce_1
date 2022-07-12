const getPricedProducts = (products, discountPrice) => {
    return products.filter((item) => item.discountPrice <= discountPrice);
  };
  
  export { getPricedProducts };
  