import React from 'react';
import styled from "styled-components";
import {navigate} from "../../lib/History";

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
      height: 32px;
      padding: 0 11px;
      line-height: 32px;
  }
  .Login_join {
    background: #3cb46e;
    color: #fff;
    border-radius: 4px;
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
  border-radius: 4px;
  margin-right: 48px;
  &:hover {
    border-color: #111;
  }
`;

const LoginContainer = styled.div`
    a {
      margin-right: 14px;
    }
`;


export default MemberNav;