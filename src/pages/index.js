import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Img from "gatsby-image"

import Layout from '../components/layout'

const MainInside = styled.div`
  border: 2px solid white;
  box-size: border-box;
  margin: 50px 50px 0 0;
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




class HomePage extends React.Component {

  render() {
    

    return (
      <Layout title='About me'>
              <MainInside>
              <MainText>Hi I'm <Em>Elliot Frank</Em>, a web developer and writer based in Chicago.<br/><br/>
              As a web developer I mostly use React and Redux on the frontend and Django on the backend.
              I'm on the job market- I'm looking for a full-time job where ideally I'd get to work on a lot of different projects.<br/><br/>
              I'm also a writer. I mostly write nonfiction, usually essays about art and politics. If you're an editor I'd love to hear from you.<br/><br/>
              Email is the best way to get in touch.<br/><br/>
              </MainText>
              </MainInside>
      </Layout>
    )
  }
}


export default HomePage





