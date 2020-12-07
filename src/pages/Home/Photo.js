import React, {useEffect} from 'react';
import styled from "styled-components";
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../../components/Photo/PhotoList";

function Photo(props) {

    const {
    
    } = props;

    const photo = useSelector(state => state.photo);
    useEffect( () => {
        getPhotoList()
    },[])
    const getPhotoList = () => photoActions.fetchPhotos()




  return (
      <Container>
          <PhotoList photo={photo.list}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default Photo;