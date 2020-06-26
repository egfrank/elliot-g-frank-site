import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import BlogLayout from "../components/bloglayout"
import SEO from "../components/seo"
import {
  WritingTitle,
  WritingSubTitle,
  DetailText
} from "../components/text"

const Article = styled.div`
  margin: 1rem 0;
`
const Header = styled.div`
  margin-bottom: 1rem;
`

const Title = ({slug, title}) => {
  if (slug) {
    return (
      <WritingTitle
        margin="0 0 0.5rem 0"
        style={{display:'inline'}}
      >
        <Link style={{ boxShadow: `none` }} to={slug}>
          {title}
        </Link>
      
      </WritingTitle>
    )
  } else {
    return (
      <WritingTitle
        margin="0 0 0.5rem 0"
        style={{display:'inline'}}
      >{title}
      </WritingTitle>
    )
  }
}

export const TitleSection = ({slug, title, date}) => {
  return (
    <Header>
      <Title slug={slug} title={title}/>
      <WritingSubTitle 
        margin="0 0 0 1rem"
        style={{display:'inline'}}
      >{date}</WritingSubTitle>
    </Header>
  )
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <BlogLayout location={this.props.location} title="Blog">
        <SEO title="Blog" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Article key={node.fields.slug}>
              <TitleSection 
                slug={node.fields.slug}
                date={node.frontmatter.date}
                title={title}
              />
              <section>
                <WritingSubTitle
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </Article>
          )
        })}
      </BlogLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "//blog//" } }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
