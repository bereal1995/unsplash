import React, {useEffect} from 'react';
import styled from "styled-components";
import {photoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../../components/Photo/PhotoList";

function Photo(props) {

    const {
    
    } = props;

    const photos = useSelector(state => state.photo);
    useEffect( () => {
        getPhotoList()
    },[])
    const getPhotoList = () => photoActions.fetchPhotos({
        per_page: 5,
    })

  return (
      <Container>
          <PhotoList photos={photos.list}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default Photo;