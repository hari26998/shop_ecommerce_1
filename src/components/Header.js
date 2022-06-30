import zIndex from '@mui/material/styles/zIndex';
import React from 'react'
import styled from 'styled-components';
import Announcement from './Announcement';
import Navbar from './Navbar';

const Container2= styled.div`


	width: 100%;
	height: 70px;
	box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	background: var(--white);
	z-index: 1;

`;

const Header = () => {
  return (
  <Container2>
   <Navbar/>
<Announcement/> 
</Container2> )
}

export default Header