import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Img from "gatsby-image"

import { Reset } from 'styled-reset'

import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import NavHeading from "../components/navheading"
import CustomFooter from "../components/customfooter"
import SocialLinks from "../components/sociallinks"
import StyledBackgroundSection from "../components/styledbackgroundsection"

import '../styles/index.css'

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
  border-right: 3px solid white;
`

const AsideContents = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
`

const PageTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  color: #2F6853;
  font-size: 36px;
  float: right;
  margin-top: 20px;
  margin-right: 50px;
`
const Main = styled.div`
  grid-column: 2 / 2;
  overflow: auto;
`

const MainInside = styled.div`
  border: 2px solid white;
  box-size: border-box;
  margin: 100px 50px 0 0;
`
const MainText = styled.div`
  color: black;
  font-family: 'Source Serif Pro', serif;
  font-size: 20px;
  margin: 50px;
  line-height: 24px;
`
const Em = styled.span`
  font-weight: bold;
` 
const Navs = styled.div` 
`
const ImgContainer = styled.div`
  margin: 0 auto;
  width: 400px;
`


class HomePage extends React.Component {

  render() {
    const { data } = this.props

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

              <Navs>
                <NavHeading link='' title='About Me' style={{marginBottom: 24}}/>
                <NavHeading link='/web' title='Web Development' style={{marginBottom: 24}}/>
                <NavHeading link='/writing' title='Writing' />
              </Navs>

              <SocialLinks />
            </AsideContents>

           </Aside>
           
           <Main>
              <PageTitle>About me</PageTitle>
              <MainInside>
              <MainText>Hi I'm <Em>Elliot Frank</Em>, a web developer and writer based in Chicago.<br/><br/>
              As a web developer I mostly use React and Redux on the frontend and Django on the backend.
              I'm on the job market- I'm looking for a full-time job where ideally I'd get to work on a lot of different projects.<br/><br/>
              I'm also a writer. I mostly write nonfiction, usually essays about art and politics. If you're an editor I'd love to hear from you.<br/><br/>
              Email is the best way to get in touch.<br/><br/>
              </MainText>
              </MainInside>
           </Main>


         </Grid>

    </Div>
    )
  }
}

// const query = graphql`
//   query {
//     file(relativePath: { eq: "me.jpg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }`

export default HomePage





