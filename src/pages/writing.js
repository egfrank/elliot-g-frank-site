import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from 'styled-components'




const PageHeading = styled.h1`
  font-family: 'Karla', sans-serif;
  color: #2F6853;
  font-size: 24px;
  margin-top: 100px;
`


class BlogIndex extends React.Component {



  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    if ( posts === undefined || posts.length === 0){
      return (
        <Layout location={this.props.location} title='Writing'>
          <SEO title="Writing" />

          <PageHeading>This blog is still under construction.</PageHeading>
        </Layout>
      )
    }

    return (
      <Layout location={this.props.location} title='Writing'>
        <SEO title="Writing" />
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
      </Layout>
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
