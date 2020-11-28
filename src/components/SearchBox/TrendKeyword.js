import React from 'react';
import styled from "styled-components";

function TrendKeyword(props) {

    const {

    } = props;

  return (
      <Container>
          <span>Trending: </span>
          <ul>
              <li><a href="#">flower, </a></li>
              <li><a href="#">wallpapers, </a></li>
              <li><a href="#">backgrounds, </a></li>
              <li><a href="#">happy, </a></li>
              <li><a href="#">love</a></li>
          </ul>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.6;
  span{
    margin-right: 4px;
  }
  ul{
    display:flex;
  }
  a{
    text-decoration: none;
  }
`;


export default TrendKeyword;