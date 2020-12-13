import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {collectionActions, photoActions, userActions} from "../../redux/ActionCreators";
import PhotoPopup from "../../components/PhotoPopup";

function PhotoPopupContainer(props) {

    const {
    } = props;

    const photo = useSelector(state => state.photo);
    useEffect( () => {
        userActions.getUserProfile(photo.popupUsername)

        if (photo.popupId) {
            photoActions.fetchPhotoById(photo.popupId)
            photoActions.relatedPhotos(photo.popupId)
        }
    }, [photo.popupId])



    if (!photo.popupId) return null;

  return (
      ReactDOM.createPortal(<PhotoPopup popupImg={photo?.popupPhoto?.urls?.regular}
                                        userPhoto={photo?.relatedPhotos}
          />,
          document.getElementById('photo-popup'))
  )
}
const Container = styled.div`
  
`;


export default PhotoPopupContainer;