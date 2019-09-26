import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

import Img from "gatsby-image"

import Layout from '../components/layout'



const PortfolioContainer = styled.div`
  box-size: border-box;
  margin: 50px 50px 0 0;
`

const PorfolioFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: -30px 0;
`

const ProjectItem = styled.div`
  margin: 30px 0;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
`

const ProjectHeader = styled.div`
  width: auto;
  height: 350px;
  background-color: grey;
`

const ProjectName = styled.h2`
  font-family: 'Source Sans Pro', serif;
  font-weight: bold;
  font-size: 26px;
  margin: 26px 0;
`

const ProjectDescription = styled.p`
  font-family: 'Source Serif Pro', serif;
`

const TextContainer = styled.div`
  color: black;
  font-size: 20px;
  line-height: 150%;
  margin: 20px 20px;

`
const Em = styled.span`
  font-weight: bold;
` 



const Project = () => {

  return (
    <ProjectItem>
      <ProjectHeader>
      </ProjectHeader>

      <TextContainer>
          <ProjectName>Bike Philadelphia</ProjectName>
          <ProjectDescription>A web app that visualizes data about the 117 stations of Philadelphia’s bikeshare system (Indego), and is designed for users looking for either available bikes or empty spots in stations across the city. 
          </ProjectDescription>
      </TextContainer>
    </ProjectItem>
    );
}

class WebPortfolio extends React.Component {

  render() {
    
    return (
      <Layout title='Web development'>
              <PortfolioContainer>
              <PorfolioFlexBox>
              <Project />
              <Project />
              <Project />
              </PorfolioFlexBox>
              </PortfolioContainer>

      </Layout>
    )
  }
}


export default WebPortfolio





