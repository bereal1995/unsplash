import {createGlobalStyle} from "styled-components";

export const pxToRem = (value) => value / 16 + 'rem';

const isIOS = () => true
const containerWith = isIOS() ? 375 : 360;

export const pxToVw = (value) => {
    return value * 100 / containerWith
}

export const setHtmlVw = () => pxToVw(16);

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: -apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;
  }
  img {
    max-width: 100%;
  }
  
  html {
    font-size: ${setHtmlVw()};
  }
  
  .button_bar{
    display: inline-block;
    width: 1px;
    height: 32px;
    position: relative;
    background: #d1d1d1;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
`;
