import React from 'react';
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";
import cn from 'classnames'

function TopicsNav(props) {

    const {
        location,
        headerList = [],
    } = props;
    
  return (
      <Container>
          <Topic>
              <TopicItem className={cn({isActive: location.pathname === '/'})} to={'/'}>Editorial</TopicItem>
              <span className={'button_bar'}/>
              {
                  headerList.map( (item, i) => (
                      <TopicItem key={i}
                                 to={`/topic/${item.slug}`}
                                 className={cn({isActive: location.pathname.startsWith(`/topic/${item.slug}`)})}
                      >{item.title}</TopicItem>
                  ))
              }
          </Topic>
      </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 56px;
  box-shadow: 0 4px 4px rgba(0,0,0,.4);
  font-size: 15px;
  font-weight: 400;
  .button_bar{
    display:table;
  }
`;

const Topic = styled.div`
    display:flex;
    align-items: center;
    height: 100%;
    overflow: auto;
`;

const TopicItem = styled(Link)`
    display:flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    color: #767676;
    white-space: nowrap;
    &:hover {
      color: #111;
    }
    &.isActive {
      color: #111;
      box-shadow: inset 0 -2px #111;
    }
`;


export default withRouter(TopicsNav);