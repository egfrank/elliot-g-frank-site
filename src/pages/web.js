import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import { Reset } from 'styled-reset'

import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import NavHeading from "../components/navheading"
import CustomFooter from "../components/customfooter"
import SocialLinks from "../components/sociallinks"
import StyledBackgroundSection from "../components/styledbackgroundsection"


const Div = styled.div`
`
const Grid = styled.div`
  display: grid;
  background: #FBCEB1;
  grid-gap: 50px 100px;
  grid-template-columns: 314px auto;
  height: 100vh;
`


const Aside = styled.div`
  background: #2F6853;
  grid-column: 1 / 2;
`

const AsideContents = styled.div`
  margin: 10px 0 0 10px;
`

const Main = styled.div`
  grid-column: 2 / 2;
`

const SubHeading = styled.h2`
  font-size: 20px;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: normal;
`





class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Div>

        <Reset />

        <header>
          <SEO title="Home" />
        </header>

        <Grid>

          <Aside>
            <AsideContents>
              <Bio />
              <NavHeading link='' title='about me' />
              <NavHeading link='/web-dev' title='web dev' />
              <NavHeading link='/writing' title='writing' />
            </AsideContents>

           </Aside>
           
           <Main>
              <p> web-dev</p>
           </Main>


         </Grid>

    </Div>
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
