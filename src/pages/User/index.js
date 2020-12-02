import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {userActions} from "../../redux/ActionCreators";
import List from "../../containers/photo/List";

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
          <TitleContainer>
              <ProtileImg>
                  <img src={profileImg} alt=""/>
              </ProtileImg>
              <h2>{query}</h2>
          </TitleContainer>
          <List photo={userPhoto}/>
      </Container>
  )
}

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
    padding: 72px 12px;
    h2 {
      font-size: 46px;
      line-height: 1.2;
      text-transform: capitalize;
    }
`;

const ProtileImg = styled.div`
    
`;
export default User;