import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
	text-align: right;
	background-color: rgb(220,220,220, 0.1);
`

const Footer = styled.p`
	color: white;
	margin: 0 10px 0 0;
`

const ExternalLink = styled.a`
	color: white;
`

const CustomFooter = function CustomFooter(props) { 
	return (
		<Div>
			<Footer>
	          © Elliot Frank {new Date().getFullYear()}, built with
	          {` `}
	          <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>
	        </Footer>
        </Div>
   	)
}


export default CustomFooter