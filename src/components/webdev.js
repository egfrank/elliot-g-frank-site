import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ProjectItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  padding: 1rem;
  background-color: #FCFDFF;
  position: relative;
`

const ProjectName = styled.p`
  font-family: "Lato", sans-serif;
  color: black;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: left;
  margin: 0;
  font-weight: 500;
`

const ProjectDescription = styled.p`
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  color: black;
`

const TextContainer = styled.div`
  padding: 0.25rem 1rem;
`

const ExternalLink = styled.p`
  a {
    box-shadow: none;
    color: black;
  }
  font-size: 0.75rem;
`
const ImageContainer = styled.div`
  padding: 0 1rem;
  width: 200px;
`



const Card = ({ node }) => {
  return (
    <ProjectItem>
      <ImageContainer>
        <a href={node.frontmatter.site}>
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        </a>
      </ImageContainer>

      <TextContainer>
        <ProjectName>
          <a href={node.frontmatter.site}>{node.frontmatter.title}</a>
        </ProjectName>
        <ProjectDescription>{node.frontmatter.description}</ProjectDescription>
        <ExternalLink>
          <a href={node.frontmatter.backend}> Backend code </a>|
          <a href={node.frontmatter.frontend}> Frontend code</a>
          <br />
        </ExternalLink>
      </TextContainer>
    </ProjectItem>
  )
}

export default Card
