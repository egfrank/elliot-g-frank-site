import React from "react"

import { rhythm } from "../utils/typography"
import styled from 'styled-components'

const SocialLinks = function SocialLinks(props) { 
	return (
  		<Grid>
  			<div style={IG}>▶ instagram</div>
  			<div style={LINKEDIN}>▶ linkedin</div>
  			<div style={GITHUB}>▶ github</div>
  			<div style={RESUME}>▶ resume</div>
  			<div style={EMAIL}>📧 elliot.g.frank@gmail.com</div>
  		</Grid>
  )
}



const Grid = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  color: white;
  grid-template-columns: 100px 200px 100px;
  @media (max-width: 740px) {
    grid-template-columns: 100px 10px 100px;
    max-width: 220px;

  }
`

const IG = {
  gridColumn: '1',
  gridRow: '1'
}

const LINKEDIN = {
  gridColumn: '1',
  gridRow: '2'
}

const GITHUB = {
  gridColumn: '3',
  gridRow: '1'
}

const RESUME = {
  gridColumn: '3',
  gridRow: '2'
}

const EMAIL = {
	gridRow: '3',
	gridColumn: '1 / 4',
	justifySelf: 'center'
}
export default SocialLinks