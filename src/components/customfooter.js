import React from 'react'
import styled from 'styled-components'
import SocialLinks from './sociallinks'

const Footer = styled.div`
	background-color: white;
	height: 100%;
	border-top: 1px solid purple;
`

const SocialLinkContainer = styled.div`
	display: flex;
	orientation: row;
	width: 50%;
	max-width: 16rem;
	margin: 1rem auto;
	justify-content: space-around;
	a {
		box-shadow: none;
	}
`
const CustomFooter = () => { 
	return (
		<Footer>
			<SocialLinkContainer>
			<SocialLinks/>
			</SocialLinkContainer>
    </Footer>
   	)
}


export default CustomFooter;