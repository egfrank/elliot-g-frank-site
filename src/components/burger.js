import React from 'react';
import { StyledBurger } from './burger.styled';


const Burger = (props) => {
	return (
		<StyledBurger open={props.open} onClick={() => props.toggleOpen()}>
		  <div />
		  <div />
		  <div />
		</StyledBurger>
)}


export default Burger;
