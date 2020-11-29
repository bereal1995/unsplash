import React, {useEffect} from 'react';
import styled from "styled-components";
import PhotoItem from "./PhotoItem";
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";

function List(props) {

    const {

    } = props;

    useEffect( () => {
        getPhotoList()
    },[])
    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA'
    const photo = useSelector(state => state.photo);
    const getPhotoList = () => photoActions.fetchPhotos({
        client_id: accessKey,
    })

  return (
      <Container>
          <Row>
          {
              photo.list.map( (item, i) => (
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

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 33.3%;
    padding: 12px;
`;

export default List;