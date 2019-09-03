/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import styled from 'styled-components'

const Paragraph = styled.p`
    font-size: 36px;
    color: white;
`

const Bio = () => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
    >
      <Paragraph>
        <strong>Elliot Frank</strong> is a web developer and
        writer who lives in Chicago.
      </Paragraph>
    </div>
  )
}




export default Bio
