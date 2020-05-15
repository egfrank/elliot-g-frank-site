import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

// import Img from "gatsby-image"

import { Reset } from 'styled-reset'

import SEO from "./seo"
import Menu from "./menu"
import CustomFooter from "./customfooter"

import '../styles/index.css'


// export const media = {
//   small: '@media(min-width: 0px)',
//   large: '@media(min-width: 600px)',
// }



// const Navs = styled.div`
//   ${media.small}{
//     display: flex;
//     flex-direction: row;
//     padding: 0 5px;
//     justify-content: center;
//     margin-top: 50px;
//   }
//   ${media.large}{
//     display: block;
//     padding: 0 0;
//   }
// `

// const NavTitle = styled(NavHeading)`
//   ${media.small}{
//     margin: 0 25px;
//   }
//   ${media.large}{
//     margin: 0 0;
//   }
// `

const PageTitle = styled.h1`
  color: #2F6853;
  font-size: 3rem;
  text-align: left;
  margin: 4rem 0 4rem 2rem;
`

const Title = ( {title} ) => {
  return (
    <PageTitle>{title}</PageTitle>
    )
}

// const Grid = styled.div`
//   ${media.small}{
//     display: grid;
//     background: #FBCEB1;
//     grid-template-rows: auto;
//     height: 100vh;
//     grid-template-columns: 100%;
//     grid-gap: 1px 1px;
//   }

//   ${media.large}{
//     display: grid;
//     background: #FBCEB1;
//     grid-gap: 50px 100px;
//     height: 100vh;
//     grid-template-rows: auto;
//     grid-template-columns: auto;
//   }
  
// `

// const Aside = styled.div`
//   ${media.small}{
//     background: #2F6853;
//     grid-row: 1 / 2;
//     border-bottom: 3px solid white;
//   }

//   ${media.large}{
//     background: #2F6853;
//     grid-column: 1 / 2;
//     border-right: 3px solid white;
//   }
// `




// const Em = styled.span`
//   font-weight: bold;
// `
const Main = styled.div`
`

const Body = styled.div`
  overflow-x: hidden;
`


class BlogLayout extends React.Component {
  render() {
    const { data, children, title } = this.props

    return (
      <Body>

        <Reset />
        <Menu />


           
           <Main>
              <Title title={title} />
              { children }
           </Main>
           <CustomFooter />


    </Body>

   )
  }
}

export default BlogLayout
