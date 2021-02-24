import React from 'react';
import styled from "styled-components";
import RelatedList from "../../components/Visual/RelatedList";
import {useSelector} from "react-redux";

function Visual(props) {

    const {
        query,
    } = props;

    const {searchRelated} = useSelector(state => state.photo);

  return (
      <Container>
          <TitleContainer>
              <h2>{query}</h2>
              <RelatedList list={searchRelated}/>
          </TitleContainer>
      </Container>
  )
}
const Container = styled.div`

`;

const TitleContainer = styled.div`
    padding: 72px 12px;
    h2 {
      font-size: 46px;
      line-height: 1.2;
      text-transform: capitalize;
      overflow:hidden; 
      text-overflow:ellipsis; 
      white-space:nowrap;
    }
`;


export default Visual;