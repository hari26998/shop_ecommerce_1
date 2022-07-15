import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container4 = styled.div`
margin:20px;

${mobile({width:"100px",
height:"auto" })}


`;

const Banner = () => {
  return (
    <div className="banner" style={{margin:"20px"}} >
       <img  style={{width:"100%",height:"500px"}} src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647900573/ecommerce-banner_vbv1gm.webp" alt=""/>
    </div>
  )
}

export default Banner