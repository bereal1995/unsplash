import React from 'react';
import styled from "styled-components";
import {navigate} from "../../lib/History";
import {pxToRem} from "../../lib/Styled";

function MemberNav(props) {

    const {

    } = props;

  return (
      <Container>
          <SubmitButton onClick={() => navigate('/')}>Submit a Photo</SubmitButton>
          <span className={'button_bar'}/>
          <LoginContainer>
              <a href="#">Login</a>
              <a href="#" className={'Login_join'}>Join free</a>
          </LoginContainer>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  transition: all .1s;
  a {
      display: inline-block;
      height: ${pxToRem(32)};
      padding: 0 ${pxToRem(11)};
      line-height: ${pxToRem(32)};
  }
  .Login_join {
    background: #3cb46e;
    color: #fff;
    border-radius: ${pxToRem(4)};
    &:hover {
      color: #fff;
      background: #37a866;
    }
  }
  .button_bar{
    left: -15px;
  }
`;


const SubmitButton = styled.a`
  border: 1px solid #d1d1d1;
  border-radius: ${pxToRem(4)};
  margin-right: ${pxToRem(48)};
  &:hover {
    border-color: #111;
  }
`;

const LoginContainer = styled.div`
    a {
      margin-right: ${pxToRem(14)};
    }
`;


export default MemberNav;