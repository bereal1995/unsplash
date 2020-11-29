import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import Header from "./components/Header";
import {useSelector} from "react-redux";
import Routes from "./Routes";

const GlobalStyle = createGlobalStyle`
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
  
  .button_bar{
    display: inline-block;
    width: 1px;
    height: 32px;
    position: relative;
    background: #d1d1d1;
  }
  
`;

function App() {

    const app = useSelector( (state) => state.app)

  return (
      <Container>

        <GlobalStyle/>

        <Header/>

        <Routes/>


      </Container>
  )
}
const Container = styled.div`

`;


export default App;