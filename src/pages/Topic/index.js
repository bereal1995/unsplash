import React from 'react';
import styled from "styled-components";
import TopicList from "../../containers/photo/TopicList";

function Topic(props) {

    const {
        match,
    } = props;
    
    const query = match.params.id.toLowerCase();

    return (
        <Container>
            <TitleContainer>
                <h2>{query}</h2>
            </TitleContainer>
            <TopicList/>
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