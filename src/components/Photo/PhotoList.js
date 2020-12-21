import React from 'react';
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import {photoActions} from "../../redux/ActionCreators";
import {pxToRem} from "../../lib/Styled";

function PhotoList(props) {

    const {
        photos
    } = props;

    const showPopup = (id, username) => {
        photoActions.updateState({
            popupId: id,
            popupUsername: username,
        })
    }

    return (
      <Container>
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
  max-width: ${pxToRem(1320)};
  margin: 0 auto;
`;

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 33.3%;
    padding: ${pxToRem(12)};
`;

export default PhotoList;