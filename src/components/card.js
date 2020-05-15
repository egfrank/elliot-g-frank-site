import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Img from "gatsby-image"


const ProjectItem = styled.div`
  background-color: rgba(255, 255, 255, 0.89);
  a {
    box-shadow: none;
    color: inherit;
  }
  width: 100%;
  margin: 0 auto;
`

const ProjectName = styled.h3`
  font-family: 'Lato', sans-serif;
  color: rgba(0,77,40,1);
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: left;
  margin: 0;
  font-weight: 500;
`


const ProjectDescription = styled.p`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  color: rgba(0,77,40,1);

`

const TextContainer = styled.div`
  margin: 1rem;
`

const ExternalLink = styled.p`
  a {
    box-shadow: none;
    color: #3000B7;
  }
  font-size: .75rem;
`
const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`



const Card = ( {node} ) => {
  return (
    <ProjectItem>
      <ImageContainer>
        <a href={node.frontmatter.site}>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
        </a>
      </ImageContainer>

      <TextContainer>
          <ProjectName><a href={node.frontmatter.site}>{node.frontmatter.title}</a></ProjectName>
          <ProjectDescription>{node.frontmatter.description}</ProjectDescription>
          <ExternalLink>
            <a href={node.frontmatter.backend}> Backend code </a>| 
            <a href={node.frontmatter.frontend}> Frontend code</a><br/>
          </ExternalLink>
          


          
      </TextContainer>
    </ProjectItem>
    );
}




export default Card;






