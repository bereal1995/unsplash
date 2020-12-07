import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {photoActions} from "../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "./Visual";

function SearchContainer(props) {

    const {
        match
    } = props;

    const query = match.params.id;
    useEffect( () => {
        getPhotoSearch()
    },[query])
    const photo = useSelector(state => state.photo.search.results);
    const getPhotoSearch = () => photoActions.searchPhotos({
        query,
        per_page: 5,
    })

    return (
        <Container>
            <Visual query={query}/>
            <PhotoList photo={photo}/>
        </Container>
    )
}
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;



export default SearchContainer;