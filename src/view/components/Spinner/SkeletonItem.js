import React from 'react';
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

function SkeletonItem() {

  return (
      <Container>
          <Thumb/>
          <Desc>
              <Text/>
              <Text/>
              <Text/>
          </Desc>
      </Container>
  )
}
const Container = styled.div`

`;

const Thumb = styled(Skeleton)`
    height: 300px;
`;

const Desc = styled.div`
    
`;

const Text = styled(Skeleton)`
    height: 20px;
    margin-top: 4px;
`;

export default SkeletonItem;