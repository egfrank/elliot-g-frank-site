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


export const media = {
  small: '@media(min-width: 0px)',
  large: '@media(min-width: 600px)',
}



const Navs = styled.div`
  ${media.small}{
    display: flex;
    flex-direction: row;
    padding: 0 5px;
    justify-content: center;
    margin-top: 50px;
  }
  ${media.large}{
    display: block;
    padding: 0 0;
  }
`

const NavTitle = styled(NavHeading)`
  ${media.small}{
    margin: 0 25px;
  }
  ${media.large}{
    margin: 0 0;
  }

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
  ${media.small}{
    display: grid;
    background: #FBCEB1;
    grid-template-rows: 300px auto;
    height: 100vh;
    grid-template-columns: 100%;
    grid-gap: 1px 1px;
  }

  ${media.large}{
    display: grid;
    background: #FBCEB1;
    grid-gap: 50px 100px;
    height: 100vh;
    grid-template-rows: auto;
    grid-template-columns: 314px auto;
  }
  
`

const Aside = styled.div`
  ${media.small}{
    background: #2F6853;
    grid-row: 1 / 2;
    border-bottom: 3px solid white;
  }

  ${media.large}{
    background: #2F6853;
    grid-column: 1 / 2;
    border-right: 3px solid white;
  }
`

const AsideContents = styled.div`
  ${media.small}{
    margin: 20px;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
  }

  ${media.large}{
    margin: 20px;
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
  }
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
                <NavTitle link='' title='About Me' style={{marginBottom: 24}}/>
                <NavTitle link='/web' title='Web Development' style={{marginBottom: 24}}/>
                <NavTitle link='/writing' title='Writing' />
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
