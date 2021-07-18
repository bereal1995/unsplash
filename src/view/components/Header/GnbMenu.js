import React from 'react';
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import cn from 'classnames'
import {useSelector} from "react-redux";
import MenuPopup from "../MenuPopup";
import {appActions} from "../../../redux/ActionCreators";
import {navigate} from "../../../lib/History";


function GnbMenu(props) {

    const {
        location,
    } = props;

    const app = useSelector(state => state.app);
    const menuPopup = () => appActions.updateState({menuPopup: !app.menuPopup})

  return (
      <Container>
        <Menu>
            <MenuItem onClick={() => navigate('/')}
                      className={cn({isActive: location.pathname === '/'})}>
                Home
            </MenuItem>
            <MenuItem onClick={() => navigate('/brands')}>
                Brands <span>New</span>
            </MenuItem>
            {/*<MenuItem onClick={ () => {*/}
            {/*    window.location.href= 'https://unsplash.com/brands'*/}
            {/*}}>Explore</MenuItem>*/}
            <MenuItem onClick={() => menuPopup()}>
                <svg width="18" height="18" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"/></svg>
                <MenuPopupContainer>
                    {app.menuPopup && <MenuPopup/>}
                </MenuPopupContainer>
            </MenuItem>
        </Menu>
      </Container>
  )
}
const Container = styled.div`
  padding: 0 36px;

`;

const Menu = styled.div`
  display:flex;
`;

const MenuItem = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px 12px;
    color: #767676;
    cursor: pointer;
    fill: currentColor;
     span {
         font-size: 10px;
         position: relative;
         top: -10px;
         background: linear-gradient(94deg,#ff2a2a,#7074ff);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         box-decoration-break: clone;
     }
    &.isActive{
      color: #111;
      cursor: default;
    }
`;
const MenuPopupContainer = styled.div`
    
`;

export default withRouter(GnbMenu);