import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Img from "gatsby-image"
import Card  from '../components/card'
import Menu from '../components/Menu'
import SEO from '../components/seo'
import CustomFooter from '../components/customfooter'

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 16rem 32rem 32rem 64rem 4rem;
  grid-template-columns: 0 1fr 0;
  @media (min-width: 800px){
    grid-template-columns: 1fr 800px 1fr;
  }

`

const Title = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 0;
  text-align: right;
  font-weight: 400;
  grid-column: -6 / -2;
  grid-row: 2 / 3;
`


const Subtitle = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: right;
  margin: 0;
  font-weight: 400;
  grid-column: -6 / -2;
  grid-row: 3 / 4;
`
const WritingEntries = styled.div`
  text-align: left;
  grid-column: 2 / -2;
  grid-row: 4 / 5;
`

const GreenLeft = styled.div`
  background-color: rgba(139, 255, 172, 0.24);
  grid-column: 1 / -4;
  grid-row: 1 / 5; 
`

const GreenRight = styled.div`
  background-color: rgba(139, 255, 172, 0.24);
  grid-column: 4 / -1;
  grid-row: 1 / 5; 
`

const IntroContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`
const IntroText = styled.div`
  font-size: 2.5em;
  line-height: 3rem;
  margin: 2rem;
`
const BlogContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  display: grid;
  grid-template-columns: 2rem 1rem 2.5rem minmax(auto, 720px) 2.5rem 1rem 2rem;
  grid-template-rows: 32px 64px 64px 1fr 48px;
`

const ClipsContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 3;

  display: grid;
  grid-template-columns: 2rem 1rem 2.5rem minmax(auto, 45rem) 2.5rem 1rem 2rem;
  grid-template-rows: 32px 64px 64px 1fr 48px;
`

const WebContainer = styled.div`
  grid-row: 4 / 5;
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1rem  minmax(auto, 45rem)  1rem;
  grid-template-rows: 1rem 6rem 1rem 1fr;
  @media (min-width: 18.75rem){
    grid-template-rows: 1rem 3rem 1rem 1fr 1rem;
  }
  background-color: rgba(139, 255, 172, 0.24);
`

const GreenCenter = styled.div`
  background-color: rgba(139, 255, 172, 0.24);
  grid-column: 1 / -1;
  grid-row: 1 / 5;
`

const GreenFinal = styled.div`
`



const WebTitle = styled(Title)`
  text-align: center;
  font-weight: 400;
  grid-row: 2 / 3 ;
  grid-column: 2 / -2;
`

const WebList = styled.div`
  grid-row: 3 / 4 ;
  grid-column: 1 / -1;
`


const ContactsContainer = styled.div`
  grid-row: 5  /  6;
  grid-column: 2 / 3;

`

const WritingTitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 400;
  margin: 1rem 0;
`
const WritingSubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin: 1rem 0;
`


const A = styled.a`
  color: 'inherit',
  textDecoration: 'inherit',
  boxShadow: 'none'
`

const BlogEntry = (props) => {
  return (
    <div >
      <WritingTitle>{props.title}</WritingTitle>
      <WritingSubTitle>{props.description}</WritingSubTitle>
    </div>
    )
}

const ClipEntry = (props) => {
  return (
    <div >
      <WritingTitle style={{display: 'inline'}}>{props.title} </WritingTitle>
      <WritingSubTitle style={{display: 'inline'}}>{props.source}</WritingSubTitle>
    </div>
    )
}



const Blog = (props) => {
  const nodes = props.data.blogContent.edges;
  return (
    <BlogContainer>

      <Title>
        <Link to="/blog" style={{
          color: 'inherit',
          textDecoration: 'inherit',
          boxShadow: 'none'
        }}>Blog</Link>
      </Title>
      <GreenLeft />
      <WritingEntries>
      {nodes.map((entry) => 
        <BlogEntry key={entry.node.frontmatter.title}
          {...entry.node.frontmatter} />
      )}
      
      </WritingEntries>

    </BlogContainer>
  )
};

const Clips = (props) => {
  const nodes = props.data.clips.edges;
  return (
    <ClipsContainer>
      <Title><Link to="/clips" style={{
          color: 'inherit',
          textDecoration: 'inherit',
          boxShadow: 'none'
        }}>Clips</Link></Title>

      <GreenRight />

      <WritingEntries>
      {nodes.map((entry) => 
        <ClipEntry key={entry.node.frontmatter.title} 
          {...entry.node.frontmatter}/>)}
      </WritingEntries>
    </ClipsContainer>
    )
}

class WebDev extends React.Component {
  render(){
    const data = this.props.data;
    const blurbs = data.webContent.edges;
    return (
      <WebContainer>
        
        <WebTitle><Link to="/web" style={{
          color: 'inherit',
          textDecoration: 'inherit',
          boxShadow: 'none'
        }}>Web Development</Link></WebTitle>
        <WebList>
          { blurbs.map((blurb) => {
              return (<Card key={blurb.node.id}
                       node={blurb.node}
              />)
            })
          }
        </WebList>
      </WebContainer>
    )
  }
}


export const query = graphql`
  query {
    webContent: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/web.*blurb/"}},
      sort: {fields: [frontmatter___date], order: DESC},
      limit: 2) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              description
              site
              frontend
              backend
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    blogContent: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/blog/.*md/"}},
      sort: {fields: [frontmatter___date], order: DESC}
      limit: 2) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              date
            }
          }
          
        }
      }

    clips: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/clips/.*md/"}},
      sort: {fields: [frontmatter___date],
      order: DESC},
      limit: 2) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              source
              date
            }
          }
        }
      }
    }
`

const HomePage = ( {data, location, } ) => {
  return (

    

    <GridContainer>
        <SEO title="Home" />
        <Menu/>
        <IntroContainer>
          <IntroText>Elliot Frank is a writer and web developer based in Chicago.
          </IntroText>
        </IntroContainer>

        <Blog data={data}/>
        <Clips data={data}/>
        <WebDev data={data}/>
        <ContactsContainer>
          <CustomFooter />
        </ContactsContainer>



    </GridContainer>
  )
  
}


export default HomePage





