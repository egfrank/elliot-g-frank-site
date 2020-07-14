import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Menu from "../components/menu"
import CustomFooter from "../components/customfooter"
import {
  TaglineContainer,
  SideDecoration,
  Divider,
  Flex,
  IntroBox,
  ResponsiveBoxes,
  FullScreenBox
} from "../components/layoutcomponents"

import {
  Tagline,
  SectionTitle,
  WritingTitle,
  WritingSubTitle,
  CustomLink,
} from "../components/text"


import { WebDev } from "../pages/index"

const TitleBox = styled(IntroBox)`
  margin-top: 3rem;
`

export const CTA = styled.div`
  margin: 2rem;
  padding: 1rem;
  max-width: 524px;
  @media screen and (min-width: 1000px){
    margin: 0;
    padding: 1rem;
    max-width: 400px;
  }
  background-color: papayawhip;
`
const WebPortfolio = ({data}) => {  
  return (
    <Flex>
      <Menu/>
      <ResponsiveBoxes>
        <TitleBox>
        <SideDecoration
          height={150} 
          left={0} 
          top={3} 
          width={4}
          color="Aquamarine"/>
          <SectionTitle>
          Web Development
          </SectionTitle>
        </TitleBox>
        <TitleBox>
          <CTA>
            <WritingSubTitle>
            Hello! I'm currently looking for part, contract, or full-time work. 
            Additionally, if you're a community-based leftist organization I'm 
            likely available to donate time for free.
            </WritingSubTitle>
          </CTA>
        </TitleBox>
      </ResponsiveBoxes>

      <SEO title="Web" />
      <WebDev data={data} />
      <CustomFooter/>
    </Flex>
  )
  
}

export default WebPortfolio

export const query = graphql`
  query {
    webContent: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/web.*blurb/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            site
            frontend
            backend
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

  }
`
