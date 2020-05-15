import React from "react"
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import Menu from "./menu"
import CustomFooter from "./customfooter"

import '../styles/index.css'

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
const Main = styled.div`
`

const Body = styled.div`
  overflow-x: hidden;
`


class BlogLayout extends React.Component {
  render() {
    const { children, title } = this.props
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
