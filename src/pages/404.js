import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

const MainInside = styled.div`
  border: 2px solid white;
  box-size: border-box;
  margin: 50px 50px 0 0;
`
const MainText = styled.div`
  color: black;
  font-family: 'Source Serif Pro', serif;
  font-size: 40px;
  margin: 50px;
  line-height: 40px;
`


class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Page Not Found" />
        <MainInside>
        <MainText>
        <h1>404: page not found</h1>
        </MainText>
        </MainInside>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
