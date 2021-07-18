import React from 'react';
import styled from "styled-components";
import SearchContainer from "../../containers/SearchContainer";

function index(props) {

    const {
        match,
    } = props;

  return (
      <Container>
          <SearchContainer match={match}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default index;