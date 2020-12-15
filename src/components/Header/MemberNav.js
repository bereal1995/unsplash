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
              <Login onClick={() => navigate('/login')}>Login</Login>
              <Join onClick={() => navigate('/join')}>Join free</Join>
          </LoginContainer>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  transition: all .1s;
  > div {
      display: inline-block;
      height: ${pxToRem(32)};
      padding: 0 ${pxToRem(11)};
      line-height: ${pxToRem(32)};
  }
  .button_bar{
    left: -15px;
  }
`;


const SubmitButton = styled.div`
  border: 1px solid #d1d1d1;
  border-radius: ${pxToRem(4)};
  margin-right: ${pxToRem(48)};
  color: #767676;
  cursor: pointer;
  &:hover {
    border-color: #111;
    color: #111;
  }
`;

const LoginContainer = styled.div`
    > div {
      margin-right: ${pxToRem(14)};
      display: inline-block;
      height: ${pxToRem(32)};
      padding: 0 ${pxToRem(11)};
      line-height: ${pxToRem(32)};
      cursor: pointer;
    }
`;

const Login = styled.div`
    color: #767676;
    &:hover {
      color: #111;
    }
`;

const Join = styled.div`
    background: #3cb46e;
    color: #fff;
    border-radius: ${pxToRem(4)};
    &:hover {
      color: #fff;
      background: #37a866;
    }
`;


export default MemberNav;