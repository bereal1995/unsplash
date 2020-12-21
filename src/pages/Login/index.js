import React from 'react';
import styled from "styled-components";
import {FormButton} from "../../components/Button/Button.Styled";
import {navigate} from "../../lib/History";
import {useForm} from 'react-hook-form';
import FormMessage from "../../components/Messasges/FormMessage";

function Login(props) {

    const {

    } = props;

    const {register, handleSubmit, errors} = useForm()

    const onSubmit = data => {
        console.log('@@data',data);
    }
    
    console.log('@@errors',errors);

  return (
      <Container>
          <ContentContainer>
              <Logo onClick={() => navigate('/')}>
                  <img className="login__logo"
                       src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"/>
                  <h1>Login</h1>
                  <p>Welcome back.</p>
              </Logo>
              <SocialButton className={'login_form'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                      <path
                          d="M21 12.1c0-5-4-9-9-9s-9 4-9 9c0 4.5 3.3 8.2 7.6 8.9v-6.3H8.3v-2.6h2.3v-2c0-2.2 1.4-3.5 3.4-3.5 1 0 2 .2 2 .2V9h-1c-1.1 0-1.4.7-1.4 1.4v1.7H16l-.4 2.6h-2.1V21c4.2-.7 7.5-4.4 7.5-8.9"></path>
                  </svg>
                  Login with Facebook
              </SocialButton>
              <p className={'horizon_line'}>OR</p>
              <LoginContainer onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className={'login_form'}>
                      <label htmlFor={'email'}>Email</label>
                      <input type="email"
                             className={'input_able_btn form-common'}
                             ref={register({
                                 required: true,
                                 validate: {
                                     isEmail: (v) => false
                                 }
                             })}
                             name={'email'}
                             id={'email'}/>
                      <FormMessage error={errors.email}/>
                  </div>
                  <div className={'login_form'}>
                      <div className="label_justify">
                          <label htmlFor={'password'}>Password</label>
                          <span>Forgot your password?</span>
                      </div>
                      <input type="password"
                             className={'input_able_btn'}
                             ref={register({
                                 required: true,
                             })}
                             name={'password'}
                             id={'password'}/>
                      <FormMessage error={errors.password}/>
                  </div>
                  <div className="login_form">
                      <input type="submit" value={'Login'} className={'input_disable_btn form-common'}/>
                  </div>
              </LoginContainer>
              <JoinButton>
                  Don't have an account? <a href="/join">Join</a>
              </JoinButton>
          </ContentContainer>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 1320px;
  padding: 0 1%;
  margin: 0 auto;
  text-align: center;
  
`;

const ContentContainer = styled.div`
    width: 41.666%;
    .horizon_line {
      margin: 36px 0;
      font-size: 12px;
      text-align: center;
    }
    .login_form {
      margin-bottom: 24px;
      font-size: 15px;
    }
`;

const Logo = styled.div`
    img{
      width: 64px;
      height: 64px;
      margin-bottom: 24px;
    }
    h1 {
      font-size: 28px;
      margin-bottom: 16px;
    }
    p {
      font-size: 15px;
      margin-bottom: 32px;
    }
    ${FormButton}
`;

const SocialButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background: #1778f2;
    svg {
      width: 22px;
      height: 22px;
      margin-right: 8px;
      fill: #fff;
    }
    color: #fff;
    ${FormButton}
`;

const LoginContainer = styled.form`
    label{
      display:block;
      text-align: left;
      margin-bottom: 6px;
    }
    input{
      width: 100%;
      ${FormButton}
    }
    .input_able_btn{
      width: 100%;
      height: 40px;
      padding: 6px 12px;
      background: rgb(232, 240, 254);
      border: 1px solid #767676;
      cursor: text;
    }
    .input_disable_btn{
      background: #111;
      color: #fff;
    }
    .label_justify{
      display:flex;
      justify-content: space-between;
    }
    span{
      color: #767676;
      text-decoration: underline;
      cursor: pointer;
      &:hover{
        color: #111;
      }
    }
`;

const JoinButton = styled.div`
  margin-top: 32px;
  a{
    color: #767676;
    text-decoration: underline;
  }    
`;

export default Login;