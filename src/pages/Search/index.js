import React, {useEffect} from 'react';
import styled from "styled-components";
import PhotoItem from '../../containers/photo/PhotoItem';
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";

function Search(props) {

    const {
        location,
        match,
    } = props;
    
    console.log('@@location',location);

    const query = match.params.id;

    useEffect( () => {
        getPhotoSearch()
    },[query])
    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA'
    const photo = useSelector(state => state.photo);
    const getPhotoSearch = () => photoActions.searchPhotos({
        client_id: accessKey,
        query,
        per_page: 5,

    })

    return (
        <Container>
            <TitleContainer>
                <h2>{query}</h2>
            </TitleContainer>
            <Row>
                {
                    photo.search.results.map( (item, i) => (
                        <Col key={i}>
                            <PhotoItem imgUrl={item.urls.regular}
                                       userName={item.user.name}
                                       profileImg={item.user.profile_image.small}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
    padding: 72px 12px;
    h2 {
      font-size: 46px;
      line-height: 1.2;
      text-transform: capitalize;
    }
`;

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 33.3%;
    padding: 12px;
`;



export default Search;