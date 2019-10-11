import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

// import Img from "gatsby-image"

import { Reset } from 'styled-reset'

import Bio from "../components/bio"
import SEO from "../components/seo"
import NavHeading from "../components/navheading"
import SocialLinks from "../components/sociallinks"

import '../styles/index.css'

const Navs = styled.div`
`

const PageTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  color: #2F6853;
  font-size: 36px;
  text-align: right;
  margin-top: 50px;
  margin-right: 50px;
`

const Title = ( {title} ) => {
  return (
    <PageTitle>{title}</PageTitle>
    )
}

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



const Em = styled.span`
  font-weight: bold;
`
const Main = styled.div`
  grid-column: 2 / 2;
  overflow: auto;
`


class Layout extends React.Component {
  render() {
    const { data, children, title } = this.props

    return (
      <div>

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
              <Title title={title} />
              { children }
           </Main>


         </Grid>

    </div>

   )
  }
}

export default Layout
