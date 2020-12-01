import React from 'react';
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

function Spinner(props) {

    const {

    } = props;

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
    width: 500px;
    height: 20px;
    margin-top: 10px;
    
  }
`;


export default Spinner;