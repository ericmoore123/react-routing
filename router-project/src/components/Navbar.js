import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="about">About </StyledLink>
        <StyledLink to="projects">Projects </StyledLink>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
}
