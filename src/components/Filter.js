import { Chip } from "@mui/material";
import React, {  useState } from "react";
// import { useSelector } from "react-redux";
// import Product from "./Product";
// import Products from "./Products";




function Filter({ handleSort, handleTagChange,selectedBrands, selectedBrand, sortBy }) {
  // const {products}=useSelector(state=>state.ProductsReducer)

  let tagNames = ["Nautica", "The north face", "boss", "max-air","zara","levis","nike","USPA","peter-england","flying machine","adidas","dolce","puma","max","bluelagoon"];
  
  

return(
  <div style={{padding:"6px 0"}}>
    <div>
      
         {tagNames && tagNames.map((b,idx)=>(
       
              <Chip
               style={{ margin:"2px",backgroundColor:"white",border:"1px solid teal"}} 
               label={b}
               size="small"
                key={idx}
                clickable
                onClick={(e) => handleTagChange(e.target.value)} 
                className={`btn mr-2 custom-filter ${
                  selectedBrand === b
                    ? "btn-secondary"
                    : "btn-outline-secondary"
                }`}

                                />
           )
           )
    }
    
    </div>
      <select
            className="form-control"
            onChange={(e) => handleSort(e.target.value)}
            value={sortBy}
          >
            <option value="">Sort by</option>
            <option value="lowest">Lowest to highest</option>
            <option value="highest">Highest to lowest</option>
          </select>
    </div>
)


  // return (



  //   <div className="container-fluid">
  //     <div className="row">
  //       <div className="col-12 col-md-9">
  //         <p className=" mr-2">
  //           Filters: <span className="mr-4"></span>
  //           {tagNames.map((brand, idx) => (
  //             <button
  //             style={{border:'1px solid teal'}}
  //               key={idx}
  //               type="button"
                // className={`btn mr-2 custom-filter ${
                //   selectedBrand === brand
                //     ? "btn-secondary"
                //     : "btn-outline-secondary"
                // }`}
  //               onClick={(e) => handleTagChange(e.target.value)}
  //               value={brand}
  //             >
  //               {brand}
  //             </button>
              
  //           ))}
            
  //         </p>
  //       </div>
  //       <div className="col-12 col-md-3">
   

          // <select
          //   className="form-control"
          //   onChange={(e) => handleSort(e.target.value)}
          //   value={sortBy}
          // >
          //   <option value="">Sort by</option>
          //   <option value="lowest">Lowest to highest</option>
          //   <option value="highest">Highest to lowest</option>
          // </select>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Filter;
