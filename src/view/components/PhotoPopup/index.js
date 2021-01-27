import React from 'react';
import styled from "styled-components";
import {photoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../Photo/PhotoList";
import Title from "./Title";

function PhotoPopup(props) {

    const {
        popupImg,
        userPhotos,
    } = props;

    const photos = useSelector(state => state.photo);

    const popupOff = () => {
        if (photos.popupId) {
            photoActions.updateState({
                popupId: undefined
            })
        }
    }
    
  return (
      <Container onClick={() => popupOff()}>
          <ContentContainer>
              <Title/>
              <Thumb>
                  <img src={popupImg} alt=""/>
              </Thumb>
              <h4>Related Photos</h4>
              <PhotoList photos={userPhotos}/>
          </ContentContainer>
      </Container>
  )
}
const Container = styled.div`
    overflow: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10000;
    padding: 50px 0;
    background: rgba(0,0,0,.5);
`;

const ContentContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background: #fff;
    h4 {
      max-width: 1320px;
      padding: 60px 12px 14px;
      margin: 12px auto;
    }
`;

const Thumb = styled.div`
    max-width: 1200px;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    img {
      width: auto;
      height: 50vw;
      object-fit: cover;
    }
`;

export default PhotoPopup;