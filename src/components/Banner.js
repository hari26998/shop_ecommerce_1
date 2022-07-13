import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container4 = styled.div`
margin:20px;

${mobile({width:"auto",
height:"auto" })}


`;

const Banner = () => {
  return (
    <Container4 >
       <span ><img style={{width:"1400px",height:"500px"}} src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647900573/ecommerce-banner_vbv1gm.webp" alt=""/></span> 
    </Container4>
  )
}

export default Banner