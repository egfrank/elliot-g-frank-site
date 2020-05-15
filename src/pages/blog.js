import React from "react"
import { Link, graphql } from "gatsby"

import BlogLayout from "../components/bloglayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from 'styled-components'




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


class BlogIndex extends React.Component {



  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    if ( posts === undefined || posts.length === 0){
      return (
          <Title>This blog is still under construction.</Title>
      )
    }

    return (
      <BlogLayout location={this.props.location} title='Blog'>
        <SEO title="Blog" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
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
          filter: {fileAbsolutePath: {regex: "/\/blog\//"}}
          limit: 1000
    )
    {
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
