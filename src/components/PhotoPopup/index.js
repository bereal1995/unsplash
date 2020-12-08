import React from 'react';
import styled from "styled-components";
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../Photo/PhotoList";

function PhotoPopup(props) {

    const {
        popupImg,
        userPhoto,
    } = props;

    const photo = useSelector(state => state.photo);

    const popupOff = () => {
        if (photo.popupId) {
            photoActions.updateState({
                popupId: undefined
            })
        }
    }

  return (
      <Container onClick={() => popupOff()}>
          <ContentContainer>
              <Thumb>
                  <img src={popupImg} alt=""/>
              </Thumb>
              <PhotoList photo={userPhoto}/>
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
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
`;

const Thumb = styled.div`
    padding: 10px;
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
`;

export default PhotoPopup;