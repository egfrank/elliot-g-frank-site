/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from 'styled-components'

const Paragraph = styled.p`
    font-size: 20px;
    color: white;
    font-family: 'Karla', sans-serif;
    line-height: 24px;
`

const Em = styled.span`
    font-weight: bold;
`


const Bio = () => {
  return (
    <div>
      <Paragraph><Em>Elliot Frank</Em> is a web developer and writer. <br/><br/>
      He is based in Chicago.
</Paragraph>
    </div>
  )
}




export default Bio
