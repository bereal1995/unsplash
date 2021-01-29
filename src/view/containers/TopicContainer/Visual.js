import React, {useEffect, useRef} from 'react';
import styled from "styled-components";

function Visual(props) {

    const {
        title,
    } = props;
    
    const titleRef = useRef(null);
    
    useEffect(() => {
        if (titleRef.current) {
            const rect = titleRef.current.getBoundingClientRect();
            console.log('@@rect',rect);
        }
    }, [title])

  return (
      <Container>
          <TitleContainer>
              <h2 ref={titleRef}>{title}</h2>
          </TitleContainer>
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
      height: 55px;
    }
`;


export default Visual;