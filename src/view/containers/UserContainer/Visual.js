import React from 'react';
import styled from "styled-components";

function Visual(props) {

    const {
        profileImg,
        query,
        description,
    } = props;

  return (
      <Container>
          <VisualContainer>
              <ProfileImage>
                  <img src={profileImg} alt=""/>
              </ProfileImage>
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
    padding: 72px 12px;
`;

const ProfileImage = styled.div`
    width: 33.3%;
    display:flex;
    justify-content: flex-end;
    margin-right: 32px;
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
      padding: 0 0 16px 16px;
      font-size: 46px;
      line-height: 1.2;
      text-transform: capitalize;
    }
`;

const Desc = styled.div`
    max-width: 70%;
    padding: 0 0 16px 16px;
    font-size: 15px;
    line-height: 1.6;
`;

export default Visual;