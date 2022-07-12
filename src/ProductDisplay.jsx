const ProductDisplay = ({ product }) => {
    return (
      <div >
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.rating}</p>
        <p>{product.discount}%</p>
        <div >
          <button className="btn btn-primary-solid">Add to cart</button>
        </div>
      </div>
    );
  };
  
  export { ProductDisplay };
  