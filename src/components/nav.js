import React from 'react';
import { StyledNav } from './nav.styled';
import { Link } from 'gatsby'

const Nav = ({open}) => {
  return (
    <StyledNav open={open}>
      <Link to="/">
        Home
      </Link>
      <Link to="/blog">
        Blog
      </Link>
      <Link to="/clips">
        Clips
        </Link>
      <Link to="/web">
        Web dev
      </Link>

    </StyledNav>
  )
}
export default Nav;
