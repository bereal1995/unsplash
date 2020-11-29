import React from 'react';
import styled from "styled-components";
import Visual from "./Visual";
import PhotoList from "../../containers/photo/PhotoList";

function index(props) {

    const {

    } = props;

  return (
      <Container>
          <Visual/>
          <PhotoList/>
      </Container>
  )
}
const Container = styled.div`

`;


export default index;