import React from 'react';
import styled from "styled-components";
import {pxToRem} from "../../lib/Styled";

function TrendKeyword(props) {

    const {

    } = props;

  return (
      <Container>
          <span>Trending: </span>
          <ul>
              <li><a href="/search/flower">flower, </a></li>
              <li><a href="/search/wallpapers">wallpapers, </a></li>
              <li><a href="/search/backgrounds">backgrounds, </a></li>
              <li><a href="/search/happy">happy, </a></li>
              <li><a href="/search/love">love</a></li>
          </ul>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  margin-top: ${pxToRem(16)};
  font-size: ${pxToRem(15)};
  line-height: 1.6;
  span{
    margin-right: ${pxToRem(4)};
  }
  ul{
    display:flex;
  }
  a{
    text-decoration: none;
  }
`;


export default TrendKeyword;