import React from "react"
import styled from "styled-components"
import SocialLinks from "./sociallinks"


const Footer = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top: 1px solid purple;
`

const MobileFooter = styled(Footer)`
  position: absolute;
  bottom: 0;
  left: 0;
  @media screen and (min-width: 1000px){
    display: none;
  }
`

const Email = styled.div`
  margin-right: 4px;
  font-size: 14px;
  font-weight: 600;
`

const SocialLinkContainer = styled.div`
  margin-left: 4px;
  display: flex;
  orientation: row;
  justify-content: space-around;
  a {
    box-shadow: none;
  }
`
const MiddleFooter = () => {
  return (
    <MobileFooter>
        <Email>elliot.g.frank@gmail.com</Email>
        <SocialLinkContainer>
          <SocialLinks />
        </SocialLinkContainer>
    </MobileFooter>
  )
}


const BottomFooter = () => {
  return (
    <Footer>
        <Email>elliot.g.frank@gmail.com</Email>
        <SocialLinkContainer>
          <SocialLinks />
        </SocialLinkContainer>
    </Footer>
  )
}

export {
  MiddleFooter,
  BottomFooter,
}
export default BottomFooter;

