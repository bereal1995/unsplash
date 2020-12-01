import React, {useEffect} from 'react';
import styled from "styled-components";
import UserList from "../../containers/photo/UserList";
import {useSelector} from "react-redux";
import {userActions} from "../../redux/ActionCreators";

function User(props) {

    const {
        match,
    } = props;

    const accessKey = '0KUYkYxvvkLzXiKIQE8LN0ED7_mEal1xnoP4EXu9YeA'
    const user = useSelector(state => state.user.profile);
    const id = match.params.id;
    useEffect( () => {
        getUserProfile()
    }, [])
    const getUserProfile = () => userActions.getUserProfile(id,{
        client_id: accessKey,
    });
    const query = user.name;
    const profileImg = user?.profile_image?.large;

    return (
      <Container>
          <TitleContainer>
              <ProtileImg>
                  <img src={profileImg} alt=""/>
              </ProtileImg>
              <h2>{query}</h2>
          </TitleContainer>
          <UserList/>
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