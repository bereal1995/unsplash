import React from 'react';
import styled from "styled-components";
import {navigate} from "../../lib/History";

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
    margin-right: 18px;
    svg{
      width: 32px;
      height: 32px;
    }
`;

const Text = styled.div`
    margin-left: 12px;
    strong{
      font-size: 15px;
      line-height: 1;
    }
    p {
      font-size: 13px;
      line-height: 1;
    }
`;


export default Logo;