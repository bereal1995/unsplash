import React, {useEffect} from 'react';
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import Header from "../../components/Header";
import TopicsNav from "../../components/Header/TopicsNav";
import {useSelector} from "react-redux";
import {topicActions} from "../../redux/ActionCreators";

function HeaderContainer(props) {

    const {
        location,
    } = props;

    const pathname = location.pathname;
    const withTopicsNav = pathname === '/' || pathname.startsWith('/topic')
    const withHeader = pathname === '/login' || pathname === '/join'

    const {headerList} = useSelector(state => state.topic);

    useEffect( () => {
        getTopicList()
    },[])

    const getTopicList = () => topicActions.fetchTopics({
        per_page: 21,
    })

    if (pathname === '/login' || pathname === '/join') return null;

  return (
      <>
          { !withHeader && <Header/>}
          {withTopicsNav && <TopicsNav headerList={headerList}/>}
      </>
  )
}
const Container = styled.div`

`;


export default withRouter(HeaderContainer);