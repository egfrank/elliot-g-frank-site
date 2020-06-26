import React from "react"
import { graphql } from "gatsby"
import styled, {css} from "styled-components"
import WebCard from "../components/webcard"
import SEO from "../components/seo"
import { MiddleFooter, BottomFooter } from "../components/customfooter"
import {
  Tagline,
  SectionTitle,
  WritingTitle,
  WritingSubTitle,
  CustomLink,
} from "../components/text"


const SideDecoration = styled.span`
  position: absolute;
  height: ${props => props.height}px;
  width: ${props => props.width || 0}px;
  background-color: ${props => props.color || "papayawhip"};
  ${props => props.top && css`
    top: ${props => props.top}px;
  `};
  ${props => props.left && css`
    left: ${props => props.left}px;
  `};
  ${props => props.right && css`
    right: ${props => props.right}px;
  `};
  ${props => props.bottom && css`
    bottom: ${props => props.bottom}px;
  `};


  @media screen and (min-width: 1000px){
    ${props => props.widthD && css`
      width: ${props => props.widthD}px;
    `};

    ${props => props.topD && css`
      top: ${props => props.topD}px;
    `};
    ${props => props.leftD && css`
      left: ${props => props.leftD}px;
    `};
    ${props => props.rightD && css`
      right: ${props => props.rightD}px;
    `};
    ${props => props.bottomD && css`
      bottom: ${props => props.bottomD}px;
    `};
  }

`
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
  position: relative;
`
const MainLinks = styled(Flex)`
  font-weight: normal;
  color: #515151;
  line-height: 153%;
  margin: 36px 48px;
  font-size: 1.5rem;
  @media screen and (min-width: 1000px){
    padding: 3rem; 
    margin: 2rem 0 0 6rem;
  }
  a {
    box-shadow: none;
  }
`

const TaglineContainer = styled(Flex)`
  padding: 3rem;
  max-width: 524px;
  @media screen and (min-width: 1000px){
    margin: 0 auto;
    padding: 3rem;
    max-width: 524px;
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

const WritingEntries = styled.div`
`

const Card = styled.div`
  margin: 2rem;
  padding: 1rem 3rem 1rem 1rem;
  background-color: #FCFDFF;
  position: relative;
`

const Dot = styled.span`
  position: absolute;
  height: ${props => props.size}rem;
  width: ${props => props.size}rem;
  top: calc(50% - ${props => props.size/2}rem);
  right: ${props => -props.size/2}rem;
  background-color: #F2C94C;
  border-radius: 50%;
  display: inline-block;
`

const WebContainer = styled.div`
`


const WebList = styled.div`
`


const BlogEntry = props => {
  return (
    <div >
      <WritingTitle>
        <CustomLink to={props.slug}>
          {props.title}
        </CustomLink>
      </WritingTitle>
      <WritingSubTitle margin="0 0 2rem 0">{props.description}</WritingSubTitle>
    </div>
  )
}

const ClipEntry = props => {
  return (
    <div style={{marginBottom: "2rem"}}>
      <WritingTitle style={{ display: "inline" }}>{props.title} </WritingTitle>
      <WritingSubTitle 
         style={{ display: "inline" }}
         >

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
      <Dot size={4}/>
      <div style={{height: "3rem"}}>
        <CustomLink
          to="/blog"
          style={{
            position: "absolute", 
            right: "3rem",
            bottom: "1rem"
          }}
          marginTop="1rem"
          hoverFactor={1.025}
        >Go to blog ->
        </CustomLink>
      </div>
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
      <Dot size={4}/>
      <div style={{height: "3rem"}}>
        <CustomLink
          to="/clips"
          style={{
            position: "absolute", 
            right: "3rem",
            bottom: "1rem"
          }}
          marginTop="1rem"
          hoverFactor={1.025}
        >Go to clips ->
        </CustomLink>
      </div>
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
        <SideDecoration
          height={340} 
          left={0} 
          top={-3} 
          width={4}
          color="Aquamarine"/>
        <TaglineContainer>
          <Tagline>
          Elliot Frank is a writer and web developer. He lives in Chicago.
          </Tagline>
        </TaglineContainer>
        </IntroBox>
        <IntroBox>
          <SideDecoration
          height={300} 
          right={12} 
          top={-12} 
          topD={12}
          width={6}
          color="Aquamarine"/>
          <MainLinks>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/clips">Clips</CustomLink>
            <CustomLink to="/web">Web Development</CustomLink>
            <CustomLink to="/">Special Projects</CustomLink>
          </MainLinks>
          
        </IntroBox>
      <MiddleFooter />
      </FullScreenBox>

      <Flex style={{marginTop: "6rem"}}>
        <SectionTitle>Latest Posts</SectionTitle>
        <Blog data={data}/>
      </Flex>
      <Divider/>
      <Flex>
        <SectionTitle>Featured Clips</SectionTitle>
        <Clips data={data}/>
      </Flex>
      <Divider/>
      <Flex>
        <SectionTitle textAlign="left">Web Development</SectionTitle>
        <WebDev data={data}/>
      </Flex>
      <BottomFooter />
    </Flex>
  )
}

export default HomePage
