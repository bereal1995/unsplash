import React from 'react';
import styled from "styled-components";
import Visual from "./Visual";
import Photo from "./Photo";
import TopicsNav from "../../components/Header/TopicsNav";

function index(props) {

    const {

    } = props;




  return (
      <Container>
          <TopicsNav/>
          <Visual/>
          <Photo/>
      </Container>
  )
}
const Container = styled.div`

`;


export default index;