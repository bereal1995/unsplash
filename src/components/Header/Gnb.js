import React from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import SearchBox from "../SearchBox";
import MemberNav from "./MemberNav";
import GnbMenu from "./GnbMenu";
import {pxToRem} from "../../lib/Styled";

function Gnb(props) {

    const {
    } = props;

  return (
      <Container>
        <Logo withText={true}/>
        <SearchBox shape={'round'}/>
        <GnbMenu/>
        <MemberNav/>
      </Container>
  )
}
const Container = styled.div`
  padding: 0 ${pxToRem(20)};
  display:flex;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(62)};
  font-size: ${pxToRem(14)};
  font-weight: 500;
  
  a {
    transition: all .1s;
    color: #767676;
    cursor: pointer;
        &:hover{
          color: #111;
        }
  }
`;


export default Gnb;