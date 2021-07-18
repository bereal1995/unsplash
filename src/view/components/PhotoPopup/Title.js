import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {navigate} from "../../../lib/History";

function Title() {

    const user = useSelector(state => state.user);

  return (
      <Container>
          <ProfileImg>
            <img src={user.profile.profile_image.small} alt=""/>
          </ProfileImg>
          <ProfileText>
            <p onClick={() => navigate(`/user/${user.profile.username}`)}>{user.profile.name}</p>
            <span onClick={() => navigate(`/user/${user.profile.username}`)}>@{user.profile.username}</span>
          </ProfileText>
      </Container>
  )
}
const Container = styled.div`
  padding: 10px;
  display:flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  margin-right: 10px;
  img {
    display:block;
    border-radius: 50%;
    overflow: hidden;
  }  
`;

const ProfileText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #111;
  p {cursor: pointer;}
  span {
    font-size: 11px;
    color: #767676;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      color: #111;
    }
  }
`;


export default Title;