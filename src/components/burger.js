import React from "react"
import styled from 'styled-components'

const StyledBurger = styled.button`
  position: absolute;
  top: 2rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: blue;
    border-radius: 20rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`
const Burger = props => {
  return (
    <StyledBurger open={props.open} onClick={() => props.toggleOpen()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
