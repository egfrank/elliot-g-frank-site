import React from 'react';
import { StyledNav } from './Nav.styled';

const Nav = ({open}) => {
  return (
    <StyledNav open={open}>
      <a href="/">
        Home
      </a>
      <a href="/clips">
        Clips
        </a>
      <a href="/blog">
        Blog
        </a>
      <a href="/web">
        Web dev
        </a>

    </StyledNav>
  )
}
export default Nav;
