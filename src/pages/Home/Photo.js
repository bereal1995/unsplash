import React, {useEffect} from 'react';
import styled from "styled-components";
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import List from "../../containers/photo/List";

function Photo(props) {

    const {
    
    } = props;

    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA'
    const photo = useSelector(state => state.photo.list);
    useEffect( () => {
        getPhotoList()
    },[])
    const getPhotoList = () => photoActions.fetchPhotos({
        client_id: accessKey,
    })



  return (
      <Container>
          <List photo={photo}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default Photo;