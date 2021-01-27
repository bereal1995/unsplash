import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {userActions} from "../../../redux/ActionCreators";
import PhotoList from "../../components/Photo/PhotoList";
import Visual from "../../pages/User/Visual";

function UserContainer(props) {

    const {
        match,
    } = props;

    const user = useSelector(state => state.user.profile);
    const userPhotos = useSelector(state => state.user.list);
    const id = match.params.id;
    const query = user.name;
    const profileImg = user?.profile_image?.large;
    const description = user?.bio;
    useEffect( () => {
        getUserProfile()
        getUserPhoto()
    }, [])
    const getUserProfile = () => userActions.getUserProfile(id);
    const getUserPhoto = () => userActions.fetchUserPhoto(id,{
        per_page: 5,
    });


    return (
      <Container>
          <Visual profileImg={profileImg}
                  query={query}
                  description={description}
          />
          <PhotoList photos={userPhotos}/>
      </Container>
  )
}

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;


export default UserContainer;