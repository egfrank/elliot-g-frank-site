import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import WebCard from "../components/card"
import Menu from "../components/menu"
import SEO from "../components/seo"
import { MiddleFooter, BottomFooter } from "../components/customfooter"



const Divider = styled.div`
  margin: 3rem auto;
  width: 56px;
  height: 16px;
  background: rgba(47, 128, 237, 0.82);
  box-shadow: 8px 8px 0px rgba(250, 255, 0, 0.53), 4px 4px 0px rgba(237, 47, 47, 0.5);
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const IntroBox = styled.div`
  flex: 1;
  min-height: 100px;
  min-width: 100px;
`
const MainLinks = styled(Flex)`
  font-weight: normal;
  color: #515151;
  line-height: 153%;
  margin: 36px 48px;
  font-size: 24px;
  @media screen and (min-width: 1000px){
    font-size: 48px;
    margin: 36px 36px;
  }

  a {
    box-shadow: none;
  }
`

const Tagline = styled(Flex)`
  color: #000000;
  font-weight: normal;
  font-size: 36px;
  font-family: Corben, serif;
  line-height: 153%;
  margin: 48px 48px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  @media screen and (min-width: 1000px){
    font-size: 72px;
    line-height: 124%;
    margin: 36px 36px;
  }
`


const ResponsiveBoxes = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1000px){
    flex-direction: row;
  }
`
const FullScreenBox = styled(ResponsiveBoxes)`
  height: 100vh;
  @media screen and (min-width: 1000px){
    height: auto;
  }
`

const Title = styled.h3`
  font-family: Corben, serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 0 0 2rem;
`


const WritingEntries = styled.div`
`
const IntroContainer = styled.div`
`
const IntroText = styled.div`
  font-size: 2.5em;
  line-height: 3rem;
  margin: 2rem;
`
const Card = styled.div`
  margin: 2rem;
  padding: 1rem 1.5rem 1rem 1rem;
  background-color: #FCFDFF;
  position: relative;
`

const Dot = styled.span`
  position: absolute;
  right: calc(-24px);
  top: calc(50% - 32px);
  height: 64px;
  width: 64px;
  background-color: #F2C94C;
  border-radius: 50%;
  display: inline-block;
`

const WebContainer = styled.div`
`

const WebTitle = styled(Title)`
  text-align: center;
  font-weight: 400;
`

const WebList = styled.div`
`

const ContactsContainer = styled.div`
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

const BlogEntry = props => {
  return (
    <div>
      <WritingTitle>
        <Link to={props.slug} style={{ color: "inherit", boxShadow: "none" }}>
          {props.title}
        </Link>
      </WritingTitle>
      <WritingSubTitle>{props.description}</WritingSubTitle>
    </div>
  )
}

const ClipEntry = props => {
  return (
    <div>
      <WritingTitle style={{ display: "inline" }}>{props.title} </WritingTitle>
      <WritingSubTitle style={{ display: "inline" }}>
        {props.source}
      </WritingSubTitle>
    </div>
  )
}

const Blog = props => {
  const nodes = props.data.blogContent.edges
  return (
    <Card>
      <WritingEntries>
        {nodes.map(entry => (
          <BlogEntry
            key={entry.node.frontmatter.title}
            slug={entry.node.fields.slug}
            {...entry.node.frontmatter}
          />
        ))}
      </WritingEntries>
      <Dot/>
      <Link
        to="/clips"
        style={{
          color: "inherit",
          textDecoration: "inherit",
          boxShadow: "none",
        }}
      >Go to Blog -></Link>
    </Card>
  )
}

const Clips = props => {
  const nodes = props.data.clips.edges
  return (
    <Card>
      <WritingEntries>
        {nodes.map(entry => (
          <ClipEntry
            key={entry.node.frontmatter.title}
            {...entry.node.frontmatter}
          />
        ))}
      </WritingEntries>
    </Card>
  )
}

class WebDev extends React.Component {
  render() {
    const data = this.props.data
    const blurbs = data.webContent.edges
    return (
      <WebContainer>
        <WebList>
          {blurbs.map(blurb => {
            return <WebCard key={blurb.node.id} node={blurb.node} />
          })}
        </WebList>
      </WebContainer>
    )
  }
}

export const query = graphql`
  query {
    webContent: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/web.*blurb/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
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
      filter: { fileAbsolutePath: { regex: "/content/blog/.*md/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
        }
      }
    }

    clips: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/clips/.*md/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
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

const HomePage = ({ data, location }) => {
  return (
    <Flex>
      <SEO title="Home" />
      <FullScreenBox>
        <IntroBox>
          <Tagline>
          Elliot Frank is a writer and web developer based in Chicago.
          </Tagline>
        </IntroBox>
        <IntroBox>
          <MainLinks>
            <Link to="/blog">Blog</Link>
            <Link to="/clips">Clips</Link>
            <Link to="/web">Web Development</Link>
            <Link to="/">Special Projects</Link>
          </MainLinks>
          <MiddleFooter />
        </IntroBox>
      </FullScreenBox>

      <Flex style={{marginTop: "6rem"}}>
        <Title>Latest Posts</Title>
        <Blog data={data}/>
      </Flex>
      <Divider/>
      <Flex>
        <Title>Featured Clips</Title>
        <Clips data={data}/>
      </Flex>
      <Divider/>
      <Flex>
        <Title>Web development</Title>
        <WebDev data={data}/>
      </Flex>
      <BottomFooter />
    </Flex>
  )
}

export default HomePage
