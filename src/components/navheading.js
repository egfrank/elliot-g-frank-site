import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import '../styles/index.css'


const Title = styled.h1`
  font-size: 24px;
  font-family: 'Karla', sans-serif;
  color: white;
`


const NavHeading = (props) => { 
	return (
		<div {...props}>
			<Link to={props.link}>
			<Title>> {props.title}</Title>
			</Link>
		</div>
		)
}


export default NavHeading