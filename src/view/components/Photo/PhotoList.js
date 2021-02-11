import React from 'react';
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import {photoActions} from "../../../redux/ActionCreators";
import {setPhotoGroup} from "../../../lib/Common";

function PhotoList({photos}) {

    const showPopup = (id, username) => {
        photoActions.updateState({
            popupId: id,
            popupUsername: username,
        })
    }

    const photosGroup = setPhotoGroup(photos);

    if (!photosGroup) return false;

    return (
      <Container className={'photo-list'}>
          {
              photosGroup.map( (group, groupIndex) => (
                  <GroupCol key={groupIndex}>
                      {
                          group.map((item,i) => (
                              <ColItem key={i}>
                                  <PhotoCard imgUrl={item.urls.regular}
                                             name={item.user.name}
                                             username={item.user.username}
                                             profileImg={item.user.profile_image.small}
                                             downloadImg={item.links.download}
                                             onClick={() => showPopup(item.id, item.user.username)}
                                             width={item.width}
                                             height={item.height}
                                             color={item.color}
                                  />
                              </ColItem>
                          ))
                      }
                  </GroupCol>
              ))
          }
      </Container>
  )
}
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display:flex;
  position: relative;
`;

const GroupCol = styled.div`
    width: 33.3%;
`;

const ColItem = styled.div`
    padding: 12px;
`;



export default PhotoList;