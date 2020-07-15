import React from "react"
import { graphql } from "gatsby"
import styled, {css} from "styled-components"


export const SideDecoration = styled.span`
  position: absolute;
  height: ${props => props.height}px;
  width: ${props => props.width || 0}px;
  background-color: ${props => props.color || "papayawhip"};
  ${props => props.top && css`
    top: ${props => props.top}px;
  `};
  ${props => props.left && css`
    left: ${props => props.left}px;
  `};
  ${props => props.right && css`
    right: ${props => props.right}px;
  `};
  ${props => props.bottom && css`
    bottom: ${props => props.bottom}px;
  `};


  @media screen and (min-width: 1000px){
    ${props => props.widthD && css`
      width: ${props => props.widthD}px;
    `};

    ${props => props.topD && css`
      top: ${props => props.topD}px;
    `};
    ${props => props.leftD && css`
      left: ${props => props.leftD}px;
    `};
    ${props => props.rightD && css`
      right: ${props => props.rightD}px;
    `};
    ${props => props.bottomD && css`
      bottom: ${props => props.bottomD}px;
    `};
  }

`
export const Divider = styled.div`
  margin: 3rem auto;
  width: 56px;
  height: 16px;
  background: rgba(47, 128, 237, 0.82);
  box-shadow: 8px 8px 0px rgba(250, 255, 0, 0.53), 4px 4px 0px rgba(237, 47, 47, 0.5);
`


export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

export const IntroBox = styled.div`
  flex: 1;
  position: relative;
`

export const ResponsiveBoxes = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1000px){
    flex-direction: row;
  }
`
export const FullScreenBox = styled(ResponsiveBoxes)`
  height: 100vh;
  min-height: -webkit-fill-available;
  @media screen and (min-width: 1000px){
    height: auto;
  }
`


export const TaglineContainer = styled(Flex)`
  padding: 3rem;
  max-width: 524px;
  @media screen and (min-width: 1000px){
    margin: 0 auto;
    padding: 3rem;
    max-width: 524px;
  }

`


