import React, {useEffect} from 'react';
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";
import cn from 'classnames'
import {photoActions, topicActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";

function TopicsNav(props) {

    const {
        location
    } = props;
    
    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA';
    const topic = useSelector(state => state.topic);

    useEffect( () => {
        getTopicList()
    },[])

    const getTopicList = () => topicActions.fetchTopics({
        client_id: accessKey,
        per_page: 21,
    })

  return (
      <Container>
          <Topic>
              <TopicItem className={cn({isActive: location.pathname === '/'})} to={'/'}>Editorial</TopicItem>
              <span className={'button_bar'}/>
              {
                  topic.headerList.map( (item, i) => (
                      <TopicItem key={i}
                                 to={`/topic/${item.title}`}
                                 className={cn({isActive: location.pathname.startsWith(`/topic/${item.title}`)})}
                      >{item.title}</TopicItem>
                  ))
              }
          </Topic>
      </Container>
  )
}

const Container = styled.div`
  height: 56px;
  box-shadow: 0px 4px 4px rgba(0,0,0,.4);
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
`;

const TopicItem = styled(Link)`
    padding: 0 20px;
    color: #767676;
    white-space: nowrap;
    &:hover {
      color: #111;
    }
    &.isActive {
      color: #111;
    }
`;


export default withRouter(TopicsNav);