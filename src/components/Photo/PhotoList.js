import React, {useEffect} from 'react';
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import {photoActions} from "../../redux/ActionCreators";

function PhotoList(props) {

    const {
        photo
    } = props;

    const showPopup = (id) => {
        photoActions.updateState({
            popupId: id,
        })
    }

    return (
      <Container>
          <Row>
          {
              photo.map( (item, i) => (
                  <Col key={i}>
                      <PhotoCard imgUrl={item.urls.regular}
                                 name={item.user.name}
                                 username={item.user.username}
                                 profileImg={item.user.profile_image.small}
                                 downloadImg={item.links.download}
                                 onClick={() => showPopup(item.id)}
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