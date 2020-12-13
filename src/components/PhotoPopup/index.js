import React from 'react';
import styled from "styled-components";
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../Photo/PhotoList";
import {pxToRem} from "../../lib/Styled";

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
              <h4>Related Photos</h4>
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
    padding: ${pxToRem(50)} 0;
    background: rgba(0,0,0,.5);
`;

const ContentContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background: #fff;
    h4 {
      max-width: ${pxToRem(1320)};
      padding: ${pxToRem(60)} ${pxToRem(12)} ${pxToRem(14)};
      margin: ${pxToRem(12)} auto;
    }
`;

const Thumb = styled.div`
    max-width: ${pxToRem(1200)};
    padding: ${pxToRem(10)};
    margin: 0 auto;
    img {
      width: 100%;
      height: 50vw;
      object-fit: cover;
    }
`;

export default PhotoPopup;