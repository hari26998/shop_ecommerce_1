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
    <Container4 className="Header">
       <span><img src="images/banner6.jpg" alt=""/></span> 
    </Container4>
  )
}

export default Banner