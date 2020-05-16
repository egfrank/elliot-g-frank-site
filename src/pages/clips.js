import React from "react"
import { graphql } from "gatsby"

import BlogLayout from "../components/bloglayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Placeholder = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 0;
  text-align: left;
  font-weight: 400;
`

class ClipsIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    if (posts === undefined || posts.length === 0) {
      return <Placeholder>This blog is still under construction.</Placeholder>
    }

    return (
      <BlogLayout location={this.props.location} title="Clips">
        <SEO title="Clips" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title

          return (
            <article key={node.fields.slug}>
              <header>
                <a style={{ boxShadow: `none` }} href={node.frontmatter.link}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    {title}
                  </h3>
                </a>

                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.source,
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

export default ClipsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "//clips//" } }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YY")
            title
            description
            source
            link
          }
        }
      }
    }
  }
`
