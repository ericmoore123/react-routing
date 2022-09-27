import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;  
`;

const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;

  :hover{
    color: red;
  }
`;

export default function Navbar() {
  return (
    <NavUnlisted>
        <StyledLink to="/">Home </StyledLink>
        <StyledLink to="about">About </StyledLink>
        <StyledLink to="projects">Projects </StyledLink>
    </NavUnlisted>
  )
}
