import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'


const PortfolioContainer = styled.div`
  box-size: border-box;
  margin: 50px 50px 0 0;
`

const PorfolioFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: -30px 0;
`

const ProjectItem = styled.div`
  margin: 30px 0;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
`

const ProjectHeader = styled.div`
  max-height: 30%;
  max-width: 100%;
  background-color: grey;
`

const ProjectName = styled.h2`
  font-family: 'Source Sans Pro', serif;
  font-weight: bold;
  font-size: 26px;
  margin: 26px 0;
`

const ProjectDescription = styled.p`
  font-family: 'Source Serif Pro', serif;

`

const TextContainer = styled.div`
  color: black;
  font-size: 20px;
  line-height: 150%;
  margin: 20px 20px;

`
const Em = styled.span`
  font-weight: bold;
` 



const Project = ( {node} ) => {
  return (
    <ProjectItem>
      <ProjectHeader>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      </ProjectHeader>

      <TextContainer>
          <ProjectName>{node.frontmatter.title}</ProjectName>
          <ProjectDescription 
            dangerouslySetInnerHTML={{__html: node.html}}/>
      </TextContainer>
    </ProjectItem>
    );
}

class WebPortfolio extends React.Component {

  render() {
    const data = this.props.data;
    const blurbs = data.allMarkdownRemark.edges;
    return (
      <Layout title='Web development'>
        <SEO title="Web" />
              <PortfolioContainer>
              <PorfolioFlexBox>
              { data.allMarkdownRemark.edges
                .map((blurb) => {
                  return (<Project key={blurb.node.id}
                           node={blurb.node}
                  />)
                })
              }
              </PorfolioFlexBox>
              </PortfolioContainer>

      </Layout>
    )
  }
}


export default WebPortfolio;



export const query = graphql`
query IndexQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/web.*blurb/"}}, 
    sort: {fields: [frontmatter___date], order: DESC}) 
  
  {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
        fileAbsolutePath
        fields {
          slug
        }

      }
    }
  }
}
`





