import React, {useEffect} from 'react';
import styled from "styled-components";
import Visual from "./Visual";
import {useSelector} from "react-redux";
import {photoActions} from "../../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";

function HomeContainer() {

    const {list, visualPhoto} = useSelector(state => state.photo);

    useEffect( () => {
        photoActions.fetchPhotos({
            per_page: 5,
        });
        photoActions.getRandomPhoto({
            count: 1,
        });

    },[])

  return (
      <Container>
          <Visual visualPhoto={visualPhoto}/>
          <PhotoList photos={list}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default HomeContainer;