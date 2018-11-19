import React from "react";
import styled from "styled-components";
import { Link } from "react-static";

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 5rem;
`;

const NavbarLinksContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #000;
  align-self: center;
  padding: 1rem;
`;

const Navbar = () => (
  <NavbarContainer>
    <NavbarLinksContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/contact">Contact</NavbarLink>
    </NavbarLinksContainer>
  </NavbarContainer>
);

export default Navbar;
