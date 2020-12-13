import React from 'react';
import styled from "styled-components";
import {pxToRem} from "../../lib/Styled";

function Visual(props) {

    const {
        profileImg,
        query,
        description,
    } = props;

  return (
      <Container>
          <VisualContainer>
              <ProtileImg>
                  <img src={profileImg} alt=""/>
              </ProtileImg>
              <ProfileText>
                <h2>{query}</h2>
                <Desc>{description}</Desc>
              </ProfileText>
          </VisualContainer>
      </Container>
  )
}
const Container = styled.div`

`;

const VisualContainer = styled.div`
    display:flex;
    padding: ${pxToRem(72)} ${pxToRem(12)};
`;

const ProtileImg = styled.div`
    width: 33.3%;
    display:flex;
    justify-content: flex-end;
    margin-right: ${pxToRem(32)};
    img{
      display:block;
      border-radius: 50%;
      overflow: hidden;
      background-color: rgba(0,0,0,.1);
      border: 1px solid #ddd;
    }
`;

const ProfileText = styled.div`
    width: 66.6%;
    h2 {
      padding: 0 0 ${pxToRem(16)} ${pxToRem(16)};
      font-size: ${pxToRem(46)};
      line-height: 1.2;
      text-transform: capitalize;
    }
`;

const Desc = styled.div`
    max-width: 70%;
    padding: 0 0 ${pxToRem(16)} ${pxToRem(16)};
    font-size: ${pxToRem(15)};
    line-height: 1.6;
`;

export default Visual;