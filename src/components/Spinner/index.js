import React from 'react';
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import {pxToRem} from "../../lib/Styled";

function Spinner(props) {

    const {
        isLoading
    } = props;

    if (!isLoading) return null;

  return (
      <Container>
          <div>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
          </div>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 10000;
  
  .react-loading-skeleton {
    display:block;
    width: ${pxToRem(500)};
    height: ${pxToRem(20)};
    margin-top: ${pxToRem(10)};
    
  }
`;


export default Spinner;