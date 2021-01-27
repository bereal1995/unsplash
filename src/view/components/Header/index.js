import React from 'react';
import styled from "styled-components";
import Gnb from "./Gnb";

function Header() {

  return (
      <Container>
          <Gnb/>
      </Container>
  )
}
const Container = styled.div`
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1500;

`;


export default Header;