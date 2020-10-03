import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  
`;

function App() {

  return (
      <Container>
          <GlobalStyle/>
        <Header/>
      </Container>
  )
}
const Container = styled.div`

`;

export default App;