import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {topicActions} from "../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "../../pages/Topic/Visual";

function TopicContainer(props) {

    const {
        match,
    } = props;
    
    const query = match.params.id.toLowerCase();
    const topic = useSelector(state => state.topic);
    useEffect( () => {
        getTopic()
    },[query])
    const getTopic = () => topicActions.searchTopics(query,{
        per_page: 5,
    })

    return (
        <Container>
            <Visual title={topic.clickTitle}/>
            <PhotoList photo={topic.list}/>
        </Container>
    )
}
const Container = styled.div`
  
`;


export default TopicContainer;