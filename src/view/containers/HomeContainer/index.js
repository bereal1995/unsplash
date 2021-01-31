import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import Visual from "./Visual";
import {useSelector} from "react-redux";
import {photoActions} from "../../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";
import {createObserver} from "../../../lib/Common";
import {SentinelCommon} from "../../../styled/Common.Styled";

function HomeContainer() {

    const {list, visualPhoto} = useSelector(state => state.photo);

    const sentinelRef = useRef();

    useEffect( () => {
        photoActions.fetchPhotos({
            per_page: 15,
            page: 1,
        });
        photoActions.getRandomPhoto({
            count: 1,
        });

        if (sentinelRef.current) {
            createObserver(sentinelRef.current, () => {
                photoActions.fetchPhotos({
                    per_page: 5,
                });
            })
        }

    },[])

  return (
      <Container>
          <Visual visualPhoto={visualPhoto}/>
          <PhotoList photos={list}/>
          <Sentinel ref={sentinelRef}/>
      </Container>
  )
}
const Container = styled.div`
  position: relative;
`;

const Sentinel = styled(SentinelCommon)`
    
`;

export default HomeContainer;