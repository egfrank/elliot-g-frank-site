import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'


const ProjectItem = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.89);
  a {
    box-shadow: none;
    color: #3000B7;
  }

`

const ProjectName = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: left;
  margin: 0;
  font-weight: 400;
`


const ProjectDescription = styled.p`
  font-size: 1rem;
`

const TextContainer = styled.div`
  margin: 1rem;
`

const ExternalLink = styled.p`
  a {
    box-shadow: none;
    color: #3000B7;
  }
`
const ImageContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`



const Card = ( {node} ) => {
  return (
    <ProjectItem>
      <ImageContainer>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
      </ImageContainer>

      <TextContainer>
          <ProjectName><a href={node.frontmatter.site} target="_blank">{node.frontmatter.title}</a></ProjectName>
          <ProjectDescription>{node.frontmatter.description}</ProjectDescription>
          <ExternalLink>
            <a href={node.frontmatter.backend} target="_blank"> Backend code </a>| 
            <a href={node.frontmatter.frontend} target="_blank"> Frontend code</a><br/>
          </ExternalLink>
          


          
      </TextContainer>
    </ProjectItem>
    );
}




export default Card;






