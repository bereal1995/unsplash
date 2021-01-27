import React from 'react';
import styled from "styled-components";
import {navigate} from "../../../lib/History";
import {Button} from "../Button/Button.Styled";

function PhotoCard(props) {

    const {
        imgUrl,
        name,
        profileImg,
        downloadImg,
        username,
        onClick = () => {},
    } = props;

    return (
        <Container>
            <Thumb>
                <img src={imgUrl}/>
            </Thumb>
            <TextContainer>
                <ClickArea onClick={onClick}/>

                <TextContainerTop>
                    <Button>
                        <svg width="32" height="32" className="BWSrD" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                            <path
                                d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"/>
                        </svg>
                    </Button>
                    <Button className={'photo_click_box'}>
                        <svg width="32" height="32" className="_2rdbO" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                            <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"/>
                        </svg>
                    </Button>
                </TextContainerTop>
                <TextContainerBottom>
                    <Profile onClick={() => navigate(`/user/${username}`)}>
                        <ProfileImg>
                            <img src={profileImg}/>
                        </ProfileImg>
                        <ProfileId>{name}</ProfileId>
                    </Profile>
                    <Button onClick={() => window.location.href=`${downloadImg}?force=true`} download>
                        <svg width="32" height="32" className="Apljk" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
                            <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"/>
                        </svg>
                    </Button>
                </TextContainerBottom>
            </TextContainer>
        </Container>
    )
}
const Container = styled.div`
    display: inline-block;
    position: relative;
    transition: all .5s;
    width: 100%;
    height: 400px;
`;

const Thumb = styled.div`
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    background: rgba(0,0,0,.2);
    opacity: 0;
    &:hover{
      opacity: 1;
    }
`;

const TextContainerTop = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const TextContainerBottom = styled.div`
  position: relative;
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const ClickArea = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

const Profile = styled.div`
    display:flex;
    align-items: center;
    opacity: .7;
    &:hover{
      opacity: 1;
    }
`;

const ProfileImg = styled.div`
    margin-right: 8px;
    border-radius: 50%;
    overflow: hidden;
    img{
      display: block;
    }
`;

const ProfileId = styled.div`
    color: #fff;    
`;

export default PhotoCard;