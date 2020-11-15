import React from "react";
import styled from  "styled-components";
import {Link, withRouter} from "react-router-dom";
import Sidemenu from "./Sidemenu";
import {HiMenu} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";



function Header(props) {

    const {
        location
    } = props;
    
    const dispatch = useDispatch();
    const state = useSelector(state => state);


    return (
        <>
            <Container>
                <Logo to={"/"}>Logo</Logo>
                <Gnb>
                    <Nav>
                        <NavItem to={"/"} className={location.pathname === '/' ? "isActive" : ""}>Home</NavItem>
                        <NavItem to={"/todos"} className={location.pathname.startsWith('/todos') ? "isActive" : ""}>todos</NavItem>
                        <NavItem to={"/photos"}>photos</NavItem>
                        <NavItem to={"/users"}>users</NavItem>
                    </Nav>
                    <ButtonMenu onClick={() => dispatch(Action.Creators.updateState({sidebar: !state.sidebar}))}>
                        <HiMenu/>
                    </ButtonMenu>
                </Gnb>
            </Container>
            {
                state.sidebar && <Sidemenu/>
            }
        </>
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

const Gnb = styled.div`
  display: flex;
    
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
  &:hover,
   &.isActive{
    color: #08c;
  }

`;

const ButtonMenu = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-left: 40px;
    cursor:pointer;
`;

export default withRouter(Header);