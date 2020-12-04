import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {userActions} from "../../redux/ActionCreators";
import List from "../../containers/photo/List";
import Visual from "./Visual";

function User(props) {

    const {
        match,
    } = props;

    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA'
    const user = useSelector(state => state.user.profile);
    const userPhoto = useSelector(state => state.user.list);
    const id = match.params.id;
    const query = user.name;
    const profileImg = user?.profile_image?.large;
    const description = user?.bio;
    useEffect( () => {
        getUserProfile()
        getUserPhoto()
    }, [])
    const getUserProfile = () => userActions.getUserProfile(id,{
        client_id: accessKey,
    });
    const getUserPhoto = () => userActions.fetchUserPhoto(id,{
        client_id: accessKey,
        per_page: 5,
    });


    return (
      <Container>
          <Visual profileImg={profileImg}
                  query={query}
                  description={description}
          />
          <List photo={userPhoto}/>
      </Container>
  )
}

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;


export default User;