import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import '../styles/index.css'

import { size } from './layout'



const Title = styled.h1`
  font-size: 24px;
  font-family: 'Karla', sans-serif;
  color: white;
  display: inline;
`;

const WideTitle = styled(Title)`
  display: none;
  @media(min-width: 600px){
  	display: inline;
  }`;


const NavHeading = (props) => {
	return (
		<div {...props} >
			<Link to={props.link}>
			<WideTitle>> </WideTitle>
			<Title>{props.title.split(' ')[0]}</Title>
			<WideTitle> {props.title.split(' ')[1]}</WideTitle>
			</Link>
		</div>
		)
}


export default NavHeading