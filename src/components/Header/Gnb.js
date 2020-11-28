import React from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import SearchBox from "../SearchBox";
import MemberNav from "./MemberNav";

function Gnb(props) {

    const {
    } = props;

  return (
      <Container>
        <Logo withText={true}/>
        <SearchBox shape={'round'}/>
        <MemberNav/>
      </Container>
  )
}
const Container = styled.div`
  padding: 0 20px;
  display:flex;
  align-items: center;
  height: 62px;
`;


export default Gnb;