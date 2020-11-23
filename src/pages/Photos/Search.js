import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoItem from "./PhotoItems";
import InputSearch from "../../components/InputSearch";
import {navigate} from "../../lib/History";
import qs from 'qs';

function Search(props) {

    const {
        match,
        location,
    } = props;

    const query = match.params.query;
    const qs = require('qs')
    const values = qs.parse(location.search, {ignoreQueryPrefix: true});
    const page = Number(values.page);
    const accessKey = "0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA";
    const photo = useSelector(state => state.photo);

    useEffect( () => {
        searchPhotos();
    }, [page,query]);

    const searchPhotos = () => photoActions.searchPhotos({
        client_id: accessKey,
        page,
        per_page: 25,
        query,
    })


    const onNext = () => navigate(`/photos/search/${query}?page=${page + 1}`)

  return (
      <Container>
          <InputSearch/>
          <Next onClick={onNext}>다음 페이지</Next>

          <Row>
              {
                  photo.search.results.map( (item, i) => (
                      <Col key={i}>
                          <PhotoItem photoUrl={item.urls.regular}
                                     title={item.alt_description}
                                     username={item.user.name}
                                     likes={item.likes}/>
                      </Col>
                  ) )
              }
          </Row>
      </Container>
  )
}
const Container = styled.div`

`;


const Button = styled.div`
    
`;

const Next = styled.div`
    font-size: 20px;
    margin-top: 20px;
`;

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 25%;
    padding: 15px;
`;


export default Search;