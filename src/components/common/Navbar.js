import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: var(--surface);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--text-secondary);
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--primary);
    transition: var(--transition);
  }
  
  &:hover, &.active {
    color: var(--primary);
    
    &:after {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <span>DSA</span>
          <span style={{ fontWeight: 400 }}>Visualizer</span>
        </Logo>
        <NavLinks>
          <StyledNavLink to="/" end>Home</StyledNavLink>
          <StyledNavLink to="/data-structures">Data Structures</StyledNavLink>
          <StyledNavLink to="/algorithms">Algorithms</StyledNavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 