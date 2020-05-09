import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'


// const PortfolioContainer = styled.div`
//   box-size: border-box;
//   margin: 50px 50px 0 0;
// `

// const PorfolioFlexBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: -30px 0;
// `

// const ProjectItem = styled.div`
//   box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
//   background-color: white;
// `
const ProjectItem = styled.div`
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



const Card = ( {node} ) => {
  return (
    <ProjectItem>
      <div>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
      </div>

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






