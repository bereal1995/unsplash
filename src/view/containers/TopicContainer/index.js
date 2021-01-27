import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {topicActions} from "../../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "./Visual";

function TopicContainer(props) {

    const {
        match,
    } = props;

    const query = match.params.id.toLowerCase();
    const topic = useSelector(state => state.topic);

    useEffect( () => {
        topicActions.getTopicById(query,{
            per_page: 5,
        })
    },[query])

    return (
        <Container>
            <Visual title={topic.topicTitle.title}/>
            <PhotoList photos={topic.topicPhotos}/>
        </Container>
    )
}
const Container = styled.div`
  
`;


export default TopicContainer;