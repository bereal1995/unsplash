import React from 'react';
import styled from "styled-components";
import {navigate} from "../../../lib/History";

function TrendKeyword() {

  return (
      <Container>
          <span>Trending: </span>
          <ul>
              <li onClick={() => navigate('/search/flower')}>flower, </li>
              <li onClick={() => navigate('/search/wallpapers')}>wallpapers, </li>
              <li onClick={() => navigate('/search/backgrounds')}>backgrounds, </li>
              <li onClick={() => navigate('/search/happy')}>happy, </li>
              <li onClick={() => navigate('/search/love')}>love</li>
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
  li {
    cursor: pointer;
  }
`;


export default TrendKeyword;