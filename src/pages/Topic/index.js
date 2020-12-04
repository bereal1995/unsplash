import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {topicActions} from "../../redux/ActionCreators";
import List from "../../containers/photo/List";
import Visual from "./Visual";
import TopicsNav from "../../components/Header/TopicsNav";

function Topic(props) {

    const {
        match,
    } = props;
    
    const query = match.params.id.toLowerCase();
    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA'
    const topic = useSelector(state => state.topic.list);
    useEffect( () => {
        getTopic()
    },[query])
    const getTopic = () => topicActions.searchTopics(query,{
        client_id: accessKey,
        per_page: 5,
    })

    return (
        <Container>
            <TopicsNav/>
            <Visual query={query}/>
            <List photo={topic}/>
        </Container>
    )
}
const Container = styled.div`
  
`;


export default Topic;