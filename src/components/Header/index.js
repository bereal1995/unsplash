import React from 'react';
import styled from "styled-components";
import Gnb from "./Gnb";
import TopicsNav from "./TopicsNav";

function Header(props) {

    const {

    } = props;

  return (
      <Container>
          <Gnb/>
          <TopicsNav/>
      </Container>
  )
}
const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1500;

`;


export default Header;