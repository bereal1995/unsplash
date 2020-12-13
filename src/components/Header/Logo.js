import React from 'react';
import styled from "styled-components";
import {navigate} from "../../lib/History";
import {pxToRem} from "../../lib/Styled";

function Logo(props) {

    const {
        withText
    } = props;

  return (
      <Container onClick={() => navigate("/")}>
          <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
               aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>

          {
              withText &&
              <Text>
                  <strong>Unsplash</strong>
                  <p>Photos for everyone</p>
              </Text>
          }
      </Container>
  )
}
const Container = styled.a`
    display:flex;
    align-items: center;
    margin-right: ${pxToRem(18)};
    svg{
      width: ${pxToRem(32)};
      height: ${pxToRem(32)};
    }
`;

const Text = styled.div`
    margin-left: ${pxToRem(12)};
    strong{
      font-size: ${pxToRem(15)};
      line-height: 1;
    }
    p {
      margin-top: ${pxToRem(2)};
      font-size: ${pxToRem(13)};
      line-height: 1;
    }
`;


export default Logo;