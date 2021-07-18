import React from 'react';
import styled from "styled-components";
import _ from 'lodash';
import SkeletonItem from "./SkeletonItem";

function SkeletonList() {

    const arr = _.range(10);

  return (
      <Container className={'skeleton-list'}>
          <Row>
              {
                  arr.map((item,i) => (
                      <Col key={i}>
                          <SkeletonItem width={item.width}
                                        height={item.height}
                                        color={item.color}/>
                      </Col>
                  ))
              }
          </Row>
      </Container>
  )
}
const Container = styled.div`
  width: 100%;
`;

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 33.3%;
    padding: 12px;
`;


export default SkeletonList;