import React from 'react';
import styled from "styled-components";
import {navigate} from "../../../lib/History";

function RelatedList({list}) {

  return (
      <Container>
          <ul>
              {
                  list.map((item,i) => (
                      <li key={i}
                          onClick={() => navigate(`/search/${item.title}`)}
                      >
                          <span>{item.title}</span>
                      </li>
                  ))
              }
          </ul>
      </Container>
  )
}
const Container = styled.div`
  overflow: hidden;
  
  margin-top: 16px;
  ul {
    display:flex;
    align-items: center;
    overflow: auto;
  }
  li {
    padding-right: 4px;
    color: #767676;
    cursor: pointer;
    font-size: 15px;
    line-height: 1;
    span {
      display:flex;
      align-items: center;
      justify-content: center;
      width: 145px;
      padding: 13px;
      border: 1px solid #767676;
      border-radius: 4px;
      transition: all .4s;
      &:hover {
        border: 1px solid #111;
        color: #111;
      }
    }
  }
`;


export default RelatedList;