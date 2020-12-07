import React from 'react';
import styled from "styled-components";

function Visual(props) {

    const {
        title,
    } = props;

  return (
      <Container>
          <TitleContainer>
              <h2>{title}</h2>
          </TitleContainer>
      </Container>
  )
}
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
    padding: 72px 12px;
    h2 {
      font-size: 46px;
      line-height: 1.2;
      text-transform: capitalize;
    }
`;


export default Visual;