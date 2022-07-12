

import { Chip } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


const  tagName=[
  {id:0,name:"Nautica"},
  {id:1,name: "The north face"},
  {id:2,name: "boss"},
  {id:3,name:"max-air"},
  {id:4,name : "zara"},
  {id:5,name:"levis"},
  {id:6,name:"nike"},
  {id:7,name:"USPA"},
  {id:8,name: "peter-england"},
  {id:9,name:"flying machine"},
  {id:10,name:"adidas"},
  {id:11,name:"dolce"},
  {id:12,name:"puma"},
  {id:13,name:"max"},
  {id:14,name:"bluelagoon"}
]

const Filter1 = ({handleSort, handleTagChange, selectedBrand, sortBy}) => {


  
  const [selectedBrands,setSelectedBrands]=useState([]);
  const [tagNames,setTagNames]=useState([])

  const fetchBrands=()=>{
   
        setTagNames(tagName)
      

    
    console.log([tagName])
  }



    useEffect(() => {
        fetchBrands();
        return()=>{
          setTagNames({})
            
        }
            // eslint-disable-next-line
        }, []);
  

const handleAdd=(b)=>{
  setSelectedBrands([...selectedBrands,b]);
  setTagNames((tagNames.filter((g)=> g.id !== b.id)))

};    
const handleRemove=(b)=>{
  setSelectedBrands(selectedBrands.filter((selected)=>selected.id !== b.id))
  setTagNames([...tagNames,b])
}
 
  return (
    <div style={{padding:"6px 0"}}>
          { selectedBrands && selectedBrands.map((b)=>(
        <Chip
        style={{ margin:"2px",backgroundColor:"white",border:"1px solid teal"}} 
        label={b.name}
        size="small"
         key={b.id}
         clickable
         onClick={(e) => handleTagChange(e.target.value)}
         onDelete={()=>handleRemove(b)}
          />
    ))}



    {tagName && tagName.map((b)=>(
       
              <Chip
               style={{ margin:"2px",backgroundColor:"white",border:"1px solid teal"}} 
               label={b.name}
               size="small"
                key={b.id}
                clickable
                onClick={()=>handleAdd(b)}
                 />
           )
           )
    }
    </div>
  )
}

export default Filter1




















// import { Chip } from '@material-ui/core';
// // import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';





// const Filter1 = ({
    
//   //   setSelectedBrands,
//   //  tagNames,
//   //  setTagNames,
// }) => {
    

 
  

//   const dispatch = useDispatch();
// const {tagNames,tagName}=useSelector(state=>state.FilterReducers)
//     // const {products}=useSelector(state=>state.ProductsReducer);
//     // setTagNames(products.b)
      
//     // const fetchBrands=()=>{
      
     
//     //   setTagNames()    
//     // }
   
    



//     // useEffect(() => {
//     //     fetchBrands();
//     //     return()=>{
//     //       setTagNames([])
            
//     //     }
//     //         // eslint-disable-next-line
//     //     }, []);
  



       

//     // const tagName = [
//     //     {id:0,name:"Nautica"},
//     //     {id:1,name: "The north face"},
//     //     {id:2,name: "boss"},
//     //     {id:3,name:"max-air"},
//     //     {id:4,name : "zara"},
//     //     {id:5,name:"levis"},
//     //     {id:6,name:"nike"},
//     //     {id:7,name:"USPA"},
//     //     {id:8,name: "peter-england"},
//     //     {id:9,name:"flying machine"},
//     //     {id:10,name:"adidas"},
//     //     {id:11,name:"dolce"},
//     //     {id:12,name:"puma"},
//     //     {id:13,name:"max"},
//     //     {id:14,name:"bluelagoon"}
//     //     ];



        // const handleAdd=(b)=>{
        //     setSelectedBrands([...selectedBrands,b]);
        //     setTagNames([(tagNames.filter((g)=>g.id !== b.id))])
        
        // };
 


//   return (
//     <div style={{padding:"6px 0"}}>
//          {tagName && tagName.map((b)=>(
//         <Chip
//         style={{ margin:"2px",backgroundColor:"white",border:"1px solid teal"}} 
//         label={b}
//         size="small"
//          key={b.id}
//          clickable
//           />
//     ))}
//     {tagNames && tagNames.map((b)=>(
       
//         <Chip
//         style={{ margin:"2px",backgroundColor:"white",border:"1px solid teal"}} 
//         label={b.name}
//         size="small"
//          key={b.id}
//          clickable
//          onClick={()=>dispatch({type:'FILTER'})}
//           />
//     ))}
//     </div>
//   )}

// export default Filter1;