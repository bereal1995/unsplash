import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {photoActions} from "../../redux/ActionCreators";
import List from "../../containers/photo/List";
import Visual from "./Visual";

function Search(props) {

    const {
        match
    } = props;

    const query = match.params.id;
    useEffect( () => {
        getPhotoSearch()
    },[query])
    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA'
    const photo = useSelector(state => state.photo.search.results);
    const getPhotoSearch = () => photoActions.searchPhotos({
        client_id: accessKey,
        query,
        per_page: 5,
    })

    return (
        <Container>
            <Visual query={query}/>
            <List photo={photo}/>
        </Container>
    )
}
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;



export default Search;