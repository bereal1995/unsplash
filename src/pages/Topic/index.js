import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {topicActions} from "../../redux/ActionCreators";
import List from "../../containers/photo/List";

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
            <TitleContainer>
                <h2>{query}</h2>
            </TitleContainer>
            <List photo={topic}/>
        </Container>
    )
}
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
    padding: 72px 12px;
    h2 {
      font-size: 46px;
      line-height: 1.2;
      text-transform: capitalize;
    }
`;

export default Topic;