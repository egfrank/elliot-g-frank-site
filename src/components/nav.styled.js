import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(209, 255, 222, 0.95);
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #3000B7;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: right;
    }

    &:hover {
      color: rgba(139, 255, 172, 1);
    }
  }
`;
