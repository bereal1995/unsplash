import React from 'react';
import styled from "styled-components";
import {navigate} from "../../../lib/History";

function MenuPopup() {

  return (
      <Container>
          <Arrow/>
          <MenuList>
              <li onClick={() => navigate('/about')}>About</li>
              <li onClick={() => navigate('/wallpapers')}>Wallpapers</li>
              <li onClick={() => navigate('/blog')}>Blog</li>
              <li onClick={() => navigate('/topic')}>Topics</li>
              <li onClick={() => navigate('/collection')}>Collections</li>
              <li onClick={() => navigate('/community')}>Community</li>
              <li onClick={() => navigate('/history')}>History</li>
              <li onClick={() => window.location.href='https://madewith.unsplash.com/?utm_source=unsplash&utm_medium=referral'}>Made with Unsplash</li>
              <li onClick={() => navigate('/developers')}>API/Developers</li>
              <li onClick={() => navigate('/apps')}>Official Apps</li>
          </MenuList>
          <SocialButtonContainer>
              <li onClick={() => window.open('https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral')}><svg width="32" height="32" className="_2gauX _33ITs hIMT1 _33ITs" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M10.2 28.9c12 0 18.6-9.9 18.6-18.6v-.8c1.2-1 2.3-2.1 3.2-3.4-1.2.5-2.5.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6-2.5-2.6-6.6-2.8-9.2-.3-1.7 1.6-2.4 4-1.9 6.3-5.2-.3-10-2.8-13.4-6.9-1.7 3-.9 6.8 2 8.7-1 0-2.1-.3-3-.8v.1c0 3.1 2.2 5.8 5.3 6.4-1 .3-2 .3-3 .1.9 2.7 3.3 4.5 6.1 4.6-2.3 1.8-5.2 2.8-8.1 2.8-.5 0-1 0-1.6-.1 3.1 1.9 6.6 2.9 10.1 2.9"></path></svg></li>
              <li onClick={() => window.open('https://www.facebook.com/unsplash/')}><svg width="32" height="32" className="_2gauX _33ITs hIMT1 _33ITs" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M32 16.1c0-8.9-7.2-16-16-16S0 7.2 0 16.1c0 8 5.9 14.6 13.5 15.8V20.7H9.4v-4.6h4.1v-3.5c0-4 2.4-6.2 6-6.2 1.8 0 3.6.3 3.6.3v3.9h-2c-2 0-2.6 1.2-2.6 2.5v3h4.4l-.7 4.6h-3.7v11.2C26.1 30.7 32 24.1 32 16.1"></path></svg></li>
              <li onClick={() => window.open('https://www.instagram.com/unsplash/?utm_source=unsplash&utm_medium=referral')}><svg width="32" height="32" className="_2gauX _33ITs hIMT1 _33ITs" version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M16 2.9c4.3 0 4.8 0 6.5.1 1.6.1 2.4.3 3 .6.7.3 1.3.6 1.8 1.2.6.6.9 1.1 1.2 1.8.2.5.5 1.4.5 2.9.1 1.7.1 2.2.1 6.5s0 4.8-.1 6.5c-.1 1.6-.3 2.4-.6 3-.3.7-.6 1.3-1.2 1.8-.6.6-1.1.9-1.8 1.2-.6.2-1.4.5-3 .6-1.7.1-2.2.1-6.5.1s-4.8 0-6.5-.1c-1.6-.1-2.4-.3-3-.6-.7-.3-1.3-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.1-.6-.4-1.5-.4-3-.1-1.7-.1-2.2-.1-6.5s0-4.8.1-6.5c0-1.5.3-2.4.5-2.9.3-.7.6-1.3 1.2-1.8.6-.6 1.1-.9 1.8-1.2.6-.3 1.5-.6 3-.6 1.7-.1 2.2-.1 6.5-.1M16 0c-4.3 0-4.9 0-6.6.1-1.7.1-2.9.3-3.9.7-1.1.4-1.9 1-2.8 1.8-.9 1-1.5 1.9-1.9 2.9-.4 1-.7 2.2-.7 3.9C0 11.1 0 11.7 0 16s0 4.9.1 6.6c.1 1.7.3 2.9.7 3.9.4 1.1 1 1.9 1.8 2.8.9.9 1.8 1.4 2.8 1.8 1 .4 2.2.7 3.9.7 1.8.2 2.4.2 6.7.2s4.9 0 6.6-.1c1.7-.1 2.9-.3 3.9-.7 1.1-.4 1.9-1 2.8-1.8.9-.9 1.4-1.8 1.8-2.8.4-1 .7-2.2.7-3.9.2-1.8.2-2.4.2-6.7s0-4.9-.1-6.6c-.1-1.7-.3-2.9-.7-3.9-.4-1.1-1-1.9-1.8-2.8-.9-.9-1.8-1.4-2.8-1.8-1-.4-2.2-.7-3.9-.7C20.9 0 20.3 0 16 0zm0 7.8c-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2s8.2-3.7 8.2-8.2c0-4.5-3.7-8.2-8.2-8.2zm0 13.5c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zm8.5-15.8c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9 1.9-.9 1.9-1.9-.8-1.9-1.9-1.9z"></path></svg></li>
          </SocialButtonContainer>
          <hr/>
          <FooterMenu>
              <li onClick={() => window.location.href='https://help.unsplash.com/en/?utm_source=unsplash&utm_medium=referral'}>Help</li>
              <span>•</span>
              <li onClick={() => window.location.href='https://unsplash.com/license'}>License</li>
              <span>•</span>
              <li onClick={() => window.location.href='https://unsplash.com/press'}>Press</li>
              <span>•</span>
              <li onClick={() => window.location.href='https://unsplash.com/hiring'}>Join the team</li>
          </FooterMenu>
      </Container>
  )
}
const Container = styled.div`
  position: absolute;
  left: .3vw;
  min-width: 160px;
  max-width: 296px;
  padding: 8px 0;
  margin-top: 12px;
  background: #000;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  text-align: left;
  z-index: 1000;
  li:hover{
    opacity: .7;
  }
  hr{
    background: hsla(0,0%,100%,.2);
    border: none;
    height: 1px;
    margin: 8px 0 5px;
  }
`;

const MenuList = styled.ul`
  li{
    padding: 8px 16px;
  }
`;

const SocialButtonContainer = styled.ul`
    display:flex;
    justify-content: space-between;
    max-width: 50%;
    padding: 12px 16px;
    svg{
      width: 18px;
      height: 18px;
    }
`;

const Arrow = styled.div`
    position: absolute;
    bottom: 100%;
    left: 3%;
    width: 0;
    height: 0;
    border-width: 7px;
    border-top-width: 0;
    border-style: solid;
    border-color: #000;
    border-left-color: transparent;
    border-right-color: transparent;
`;

const FooterMenu = styled.ul`
    display:flex;
    padding: 8px 16px;
    color: #d1d1d1;
    font-size: 13px;
    white-space: nowrap;
    span{
      color: #fff;
      margin: 0 8px;
    }
`;


export default MenuPopup;