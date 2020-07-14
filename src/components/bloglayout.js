import React from "react"
import styled from "styled-components"
import Menu from "./menu"
import CustomFooter from "./customfooter"
import {SectionTitle} from "../components/text"

import "../styles/index.css"



const Container = styled.div`
  overflow-x: hidden;
`

const Header = styled.div`
  height: 10vh;
  width: 85vw;
  margin: 4rem auto 2rem;
`

const Main = styled.div`
  min-height: 72vh;
  width: 85vw;
  margin: 0 auto;
`

class BlogLayout extends React.Component {
  render() {
    const { children, title } = this.props
    return (
      <Container>
        <Menu />
      <Header>
        <SectionTitle margin="0">{title}</SectionTitle>
      </Header>
        <Main>
          {children}
        </Main>
        <CustomFooter />
      </Container>
    )
  }
}

export default BlogLayout
