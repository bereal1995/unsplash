import React from 'react';
import styled from "styled-components";
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";

function PhotoPopup(props) {

    const {
        popupImg,
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
          </ContentContainer>
      </Container>
  )
}
const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10000;
    background: rgba(0,0,0,.5);
`;

const Thumb = styled.div`
    padding: 10px;
    img {
    
    }
`;

const ContentContainer = styled.div`
    width: 80%;
    max-width: 1200px;
    background: #fff;
`;

export default PhotoPopup;