import React from 'react';
import styled from "styled-components";
import Visual from "./Visual";
import List from "../../containers/photo/List";

function index(props) {

    const {

    } = props;

  return (
      <Container>
          <Visual/>
          <List/>
      </Container>
  )
}
const Container = styled.div`

`;


export default index;