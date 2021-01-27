import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {photoActions} from "../../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "./Visual";

function SearchContainer(props) {

    const {
        match
    } = props;

    const photos = useSelector(state => state.photo.search.results);
    const query = match.params.id;

    useEffect( () => {
        photoActions.searchPhotos({
            query,
            per_page: 5,
        });
    },[query])

    return (
        <Container>
            <Visual query={query}/>
            <PhotoList photos={photos}/>
        </Container>
    )
}
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;



export default SearchContainer;