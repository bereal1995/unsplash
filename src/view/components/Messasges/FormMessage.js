import React from 'react';
import styled from "styled-components";

function FormMessage(props) {

    const {
        error,
    } = props;

    if (!error) return null;

  return (
      <Container>
          {
              error.type === 'required' &&
                  '필수 입력 사항입니다.'
          }
          {
              error.type === 'isEmail' &&
              '이메일 형식이 아닙니다.'
          }
      </Container>
  )
}
const Container = styled.div`

`;


export default FormMessage;