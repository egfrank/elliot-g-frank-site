import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import BigButton from "../components/bigbutton"
import CustomFooter from "../components/customfooter"
import SocialLinks from "../components/sociallinks"
import StyledBackgroundSection from "../components/styledbackgroundsection"


const SubHeading = styled.h2`
  font-size: 28px;
  color: white;
`

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    // console.log(JSON.stringify(data, null, 4))
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
      <StyledBackgroundSection>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >

        <header>
          <SEO title="Home" />
          <Bio />
        </header>


        <main>
          <SubHeading>Work:</SubHeading>
          <BigButton title="web dev" subtitle="(projects, resume, technical deets)" link="/web/" />
          <BigButton title="writing" subtitle="(essays, reviews, thoughts)" link="/writing/" />
          <SubHeading>Links:</SubHeading>
          <SocialLinks />
         </main>
       </div>
      <CustomFooter />
      </StyledBackgroundSection>
    </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
