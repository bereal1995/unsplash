import React from 'react';
import styled from "styled-components";
import {pxToRem} from "../../lib/Styled";

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
    padding: ${pxToRem(72)} ${pxToRem(12)};
    h2 {
      font-size: ${pxToRem(46)};
      line-height: 1.2;
      text-transform: capitalize;
    }
`;


export default Visual;