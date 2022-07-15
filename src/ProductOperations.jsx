

  import { useProduct } from "./ProductContext";
const ProductOperations = () => {
  const { state, dispatch } = useProduct();
  const { sortBy, category, discountPrice, discount } = state;
  const { men, women } = category;

  return (
    <fieldset className="Product_op" style={{width:"1000px",height:"50%",alignItems:"flex-start"}}>
      <button
        onClick={() => dispatch({ type: "CLEAR" })}
        style={{backgroundColor:"white",color:"black",border:"1px solid teal"}}
      >
        Clear All
      </button>
      <h3>Sort by price</h3>
      <label for="radio-input-1" >
        <input
          type="radio"
          id="radio-input-1"
          name="radio-item"
          value="lowToHigh"
          checked={sortBy === "LOW_TO_HIGH"}
          onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
        />

        <span>Low to High</span>
      </label>
      <label for="radio-input-2" >
        <input
          type="radio"
          id="radio-input-2"
          name="radio-item"
          value="highToLow"
          checked={sortBy === "HIGH_TO_LOW"}
          onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
        />
        <span>High to low</span>
      </label>
      <h3>Category</h3>
      <label for="checkbox-input" >
        <input
          type="checkbox"
          name="men"
          value="men"
          id="checkbox-input"
          checked={men}
          onChange={(e) => dispatch({ type: "MEN" })}
        />
        Men
      </label>{" "}
      <label for="checkbox-input">
        <input
          type="checkbox"
          name="women"
          value="women"
          id="checkbox-input"
          checked={women}
          onChange={(e) => dispatch({ type: "WOMEN" })}
        />
        Women
      </label>
      <section class="filter-section">
        <ul >
          <h3>DISCOUNT</h3>
          <li>
            <label for="input-7%" >
              <input
                type="radio"
                id="input-7%"
                name="radio-discount"
                checked={discount === 7}
                value="7"
                onChange={(e) =>
                  dispatch({ type: "DISCOUNT", value: e.target.value })
                }
              />

              <span>7% and above</span>
            </label>
          </li>

          <li>
            <label for="input-6%">
              <input
                type="radio"
                id="input-6%"
                name="radio-discount"
                checked={discount === 6}
                value="6"
                onChange={(e) =>
                  dispatch({ type: "DISCOUNT", value: e.target.value })
                }
              />
              <span>6% and above</span>
            </label>
          </li>
          <li>
            <label for="input-5%" class="flex-row gap-xs">
              <input
                type="radio"
                id="input-5%"
                name="radio-discount"
                checked={discount === 5}
                value="5"
                onChange={(e) =>
                  dispatch({ type: "DISCOUNT", value: e.target.value })
                }
              />
              <span>5% and above</span>
            </label>
          </li>
          <li>
            <label for="input-3%" >
              <input
                type="radio"
                id="input-3%"
                name="radio-discount"
                checked={discount === 3}
                value="3"
                onChange={(e) =>
                  dispatch({ type: "DISCOUNT", value: e.target.value })
                }
              />
              <span>3% and above</span>
            </label>
          </li>
          <li>
            <label for="input-2%">
              <input
                type="radio"
                id="input-2%"
                name="radio-discount"
                value="2"
                checked={discount === 2}
                onChange={(e) =>
                  dispatch({ type: "DISCOUNT", value: e.target.value })
                }
              />
              <span>2% and above</span>
            </label>
          </li>
        </ul>
      </section>
      <h3>PRICE</h3>
      <div class="slider-container">
        <datalist className="tickmarks"
         style={{
          display: "flex",
          width:"100%",
          justifyContent:"space-between",
          paddingTop:"0px",
       }}>
          <option value="1000" label="1k"></option>
          <option value="2000" label="2k"></option>
          <option value="3000" label="3k"></option>
          <option value="4000" label="4k"></option>
          <option value="5000" label="5k"></option>
        </datalist>
        <input
          type="range"
          name=""
          class="slider"
          step="1000"
          min="1000"
          max="5000"
          value={discountPrice}
          onChange={(e) =>
            dispatch({ type: "DISCOUNTPRICE", discountPrice_value: e.target.value })
          }
          style={{
            width:"100%",
            // background: "teal"
          }}
        />
      </div>
    </fieldset>
  );
};



//   return (
//     <fieldset style={{width:"30%"}}>
//       <button
//         style={{backgroundColor:"white",color:"black",border:"1px solid teal"}}
//         onClick={() => dispatch({ type: "CLEAR" })}
//       >
//         Clear All
//       </button>
//       <h3>Sort by price</h3>
//       <label for="radio-input-1" className="flex-row gap-s">
//         <input
//            style={{backgroundColor:"White",color:"teal"}}
//           type="radio"
//           className="input-radio element-round"
//           id="radio-input-1"
//           name="radio-item"
//           value="lowToHigh"
//           checked={sortBy === "LOW_TO_HIGH"}
//           onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
//         />

//         <span>Low to High</span>
//       </label>
//       <label for="radio-input-2" className="flex-row gap-s">
//         <input
//           type="radio"
//           className="input-radio element-round"
//           id="radio-input-2"
//           name="radio-item"
//           value="highToLow"
//           checked={sortBy === "HIGH_TO_LOW"}
//           onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
//         />
//         <span>High to low</span>
//       </label>
//       <h3>Category</h3>
//       <label for="checkbox-input" className="flex-row gap-s">
//         <input
//           type="checkbox"
//           name="men"
//           value="men"
//           id="checkbox-input"
//           className="input-checkbox"
//           checked={men}
//           onChange={(e) => dispatch({ type: "MEN" })}
//         />
//         men
//       </label>{" "}
//       <label for="checkbox-input" className="flex-row gap-s">
//         <input
//           type="checkbox"
//           name="women"
//           value="women"
//           id="checkbox-input"
//           className="input-checkbox"
//           checked={women}
//           onChange={(e) => dispatch({ type: "WOMEN" })}
//         />
//         women
//       </label>
//       <section class="filter-section">
//         <ul class="filter-input-wrapper flex-column gap-xs">
//           <h3>DISCOUNT</h3>
//           <li>
//             <label for="input-7%" class="flex-row gap-xs">
//               <input
//                 type="radio"
//                 class="input-radio element-round"
//                 id="input-7%"
//                 name="radio-discount"
//                 checked={discount === 7}
//                 value="7"
//                 onChange={(e) =>
//                   dispatch({ type: "DISCOUNT", value: e.target.value })
//                 }
//               />

//               <span>7% and above</span>
//             </label>
//           </li>

//           <li>
//             <label for="input-6%" class="flex-row gap-xs">
//               <input
//                 type="radio"
//                 class="input-radio element-round"
//                 id="input-6%"
//                 name="radio-discount"
//                 checked={discount === 6}
//                 value="6"
//                 onChange={(e) =>
//                   dispatch({ type: "DISCOUNT", value: e.target.value })
//                 }
//               />
//               <span>6% and above</span>
//             </label>
//           </li>
//           <li>
//             <label for="input-5%" class="flex-row gap-xs">
//               <input
//                 type="radio"
//                 class="input-radio element-round"
//                 id="input-5%"
//                 name="radio-discount"
//                 checked={discount === 5}
//                 value="5"
//                 onChange={(e) =>
//                   dispatch({ type: "DISCOUNT", value: e.target.value })
//                 }
//               />
//               <span>5% and above</span>
//             </label>
//           </li>
//           <li>
//             <label for="input-3%" class="flex-row gap-xs">
//               <input
//                 type="radio"
//                 class="input-radio element-round"
//                 id="input-3%"
//                 name="radio-discount"
//                 checked={discount === 3}
//                 value="3"
//                 onChange={(e) =>
//                   dispatch({ type: "DISCOUNT", value: e.target.value })
//                 }
//               />
//               <span>3% and above</span>
//             </label>
//           </li>
//           <li>
//             <label for="input-2%" class="flex-row gap-xs">
//               <input
//                 type="radio"
//                 class="input-radio element-round"
//                 id="input-2%"
//                 name="radio-discount"
//                 value="2"
//                 checked={discount === 2}
//                 onChange={(e) =>
//                   dispatch({ type: "DISCOUNT", value: e.target.value })
//                 }
//               />
//               <span>2% and above</span>
//             </label>
//           </li>
//         </ul>
//       </section>
//       <h3>PRICE</h3>
//       <div class="slider-container">
//         <datalist id="tickmarks" 
        // style={{
        //     display: "flex",
        //     width:"100%",
        //     justifyContent:"space-between",
        //     paddingTop:"0px",
        //  }} >
//           <option value="1000" label="1k">1k</option>
//           <option value="2000" label="2k">2k</option>
//           <option value="3000" label="3k">3k</option>
//           <option value="4000" label="4k">4k</option>
//           <option value="5000" label="5k">5k</option>
//         </datalist>
//         <input
//           type="range"
//           name=""
//           class="slider"
//           step="1000"
//           min="1000"
//           max="5000"
//           value={discountPrice}
//           onChange={(e) =>
//             dispatch({ type: "DISCOUNTPRICE", discountPrice_value: e.target.value })
//           }
          // style={{width:"100%",color:"teal"
     
          // }}
//         />
//       </div>
//     </fieldset>
//   );
// };

export { ProductOperations };
