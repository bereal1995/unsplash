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
  }
  img {
    max-width: 100%;
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