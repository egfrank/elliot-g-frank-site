import React from "react"
import styled from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, faFile, faEnvelope)

const Outline = styled.span`
  background: transparent;
  border: 1.2px solid black;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  box-sizing: bounding-box;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 20px;
  color: black;
  margin: 0 4px;
`

const SocialLinks = () => {
  return (
    <React.Fragment>
      <SocialLink
        link="https://github.com/egfrank"
        icon={["fab", "github"]}
        style={{ fontSize: "24px" }}
      />
      <SocialLink
        link="https://www.linkedin.com/in/elliot-frank-995816143/"
        icon={["fab", "linkedin"]}
        style={{ fontSize: "22px" }}
      />
      <SocialLink
        link="https://www.instagram.com/elliot.g.frank/"
        icon={["fab", "instagram"]}
        style={{ fontSize: "26px" }}
      />
    </React.Fragment>
  )
}

const SocialLink = props => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Outline>
        <Icon {...props} />
      </Outline>
    </a>
  )
}

const Icon = ({ icon, ...rest }) => {
  return <FontAwesomeIcon icon={icon} {...rest} />
}

export default SocialLinks
