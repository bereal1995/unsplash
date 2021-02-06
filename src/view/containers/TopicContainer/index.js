import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {topicActions} from "../../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "./Visual";
import {SentinelCommon} from "../../../styled/Common.Styled";
import {createObserver} from "../../../lib/Common";

function TopicContainer(props) {

    const {
        match,
    } = props;

    const query = match.params.id.toLowerCase();
    const topic = useSelector(state => state.topic);
    const sentinelRef = useRef()
    useEffect( () => {
        topicActions.getTopicById(query,{
            per_page: 15,
            page: 1,
        })
        if (sentinelRef.current) {
            console.log('@@query',query);
            createObserver(sentinelRef.current, () => {
                topicActions.getTopicByIdMore(query,{
                    per_page: 5,
                })
            })
        }
    },[query])

    return (
        <Container>
            <Visual title={topic.topicTitle.title}/>
            <PhotoList photos={topic.topicPhotos}/>
            <Sentinel ref={sentinelRef}/>
        </Container>
    )
}
const Container = styled.div`
  position: relative;
`;

const Sentinel = styled(SentinelCommon)`
    
`;


export default TopicContainer;