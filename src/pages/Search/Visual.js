import React from 'react';
import styled from "styled-components";
import {pxToRem} from "../../lib/Styled";

function Visual(props) {

    const {
        query,
    } = props;

  return (
      <Container>
          <TitleContainer>
              <h2>{query}</h2>
          </TitleContainer>
      </Container>
  )
}
const Container = styled.div`

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