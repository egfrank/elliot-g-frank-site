import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

 
const Title = styled.h1`
  font-size: 64px;
`

const Subtitle = styled.p`
  font-size: 18px;
`

const BigButton = function BigButton(props) { 
	return (
		<Link to={props.link}>
		<div style=
			{{
			   background: 'rgba(0, 128, 246, 0.67)',
			   color: 'white',
			   textAlign: 'center'
			}}
		>
			
				<Title>{props.title.toUpperCase()}</Title>
				<Subtitle>{props.subtitle}</Subtitle>
			
		</div>
		</Link>
		)
}


export default BigButton