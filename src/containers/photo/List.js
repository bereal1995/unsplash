import React, {useEffect} from 'react';
import styled from "styled-components";
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoCard from "../../components/Photo/PhotoCard";
import Spinner from "../../components/Spinner";

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
    const app = useSelector(state => state.app);

  return (
      <Container>
          <Row>
          {
              photo.list.map( (item, i) => (
                  <Col key={i}>
                      <PhotoCard imgUrl={item.urls.regular}
                                 name={item.user.name}
                                 username={item.user.username}
                                 profileImg={item.user.profile_image.small}
                                 downloadImg={item.links.download}
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