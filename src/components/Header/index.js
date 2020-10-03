import React from "react";
import styled from  "styled-components";
import {Link} from "react-router-dom";


function Header() {
    return (
        <Container>
            <Logo to={"/"}>Logo</Logo>
            <Nav>
                <NavItem to={"/"}>Home</NavItem>
                <NavItem to={"/todos"}>todos</NavItem>
                <NavItem to={"/photos"}>photos</NavItem>
                <NavItem to={"/users"}>users</NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.header`
  height: 70px;
  border-bottom: 1px solid #eee;
  box-shadow: 1px 1px 10px rgba(0,0,0,.15);
  display:flex;
  justify-content: space-between; //공간을 두고 떨어짐!
  padding: 0 60px;
`;

const Logo = styled(Link)`
  display:flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-transform:uppercase;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled(Link)`
  display:flex;
  align-items: center;
  padding: 0 25px;
  text-transform:uppercase;
  font-size: 16px;
  color: #333;
  &:hover {
    color: #08c;
  }
`;

export default Header;