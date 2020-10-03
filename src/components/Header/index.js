import React from "react";
import styled from  "styled-components";


function Header() {
    return (
        <Container>
            <Logo>Logo</Logo>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>todos</NavItem>
                <NavItem>photos</NavItem>
                <NavItem>users</NavItem>
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

const Logo = styled.div`
  display:flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-transform:uppercase;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  display:flex;
  align-items: center;
  padding: 0 25px;
  text-transform:uppercase;
  font-size: 16px;;
  &:hover {
    color: #08c;
  }
`;

export default Header;