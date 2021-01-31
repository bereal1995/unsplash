import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {photoActions} from "../../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "./Visual";
import {createObserver} from "../../../lib/Common";
import {SentinelCommon} from "../../../styled/Common.Styled";

function SearchContainer(props) {

    const {
        match
    } = props;

    const photos = useSelector(state => state.photo.search.results);
    const query = match.params.id;

    const sentinelRef = useRef();

    useEffect( () => {
        photoActions.searchPhotos({
            query,
            page: 1,
            per_page: 15,
        });
        if (sentinelRef.current) {
            createObserver(sentinelRef.current, () => {
                photoActions.searchPhotosMore({
                    query: query,
                    per_page: 5,
                })
            })
        }
        window.scrollTo(0,0);
    },[query])

    return (
        <Container>
            <Visual query={query}/>
            <PhotoList photos={photos}/>
            <Sentinel ref={sentinelRef}/>
        </Container>
    )
}
const Container = styled.div`
  position: relative;
  max-width: 1320px;
  margin: 0 auto;
  min-height: 110vh;
`;

const Sentinel = styled(SentinelCommon)`
   
`;

export default SearchContainer;