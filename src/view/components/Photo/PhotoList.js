import React from 'react';
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import {photoActions} from "../../../redux/ActionCreators";

function PhotoList({photos}) {

    const showPopup = (id, username) => {
        photoActions.updateState({
            popupId: id,
            popupUsername: username,
        })
    }

    if (typeof photos[0] === 'undefined') return '검색결과가 없습니다.'

    return (
      <Container className={'photo-list'}>
          <Row>
          {
              photos.map( (item, i) => (
                  <Col key={i}>
                      <PhotoCard imgUrl={item.urls.regular}
                                 name={item.user.name}
                                 username={item.user.username}
                                 profileImg={item.user.profile_image.small}
                                 downloadImg={item.links.download}
                                 onClick={() => showPopup(item.id, item.user.username)}
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

export default PhotoList;