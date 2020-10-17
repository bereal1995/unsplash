import React from "react";
import styled from "styled-components";

function PhotoItems(props) {

    const {
        photoUrl,
        title,
        likes,
        username
    } = props;

    return (
        <Container>
            <Tumb>
                <img src={photoUrl} alt=""/>
            </Tumb>
            <Desc>
                <h3>{title}</h3>
            </Desc>
            <Info>
                <div>{likes}</div>
                <div>{username}</div>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: 1px 1px 10px rgba(0,0,0,.15);
`;

const Tumb = styled.div`
    height: 230px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

const Desc = styled.div`
    padding: 20px;
    h3 {
      font-size: 15px;
      color:#333;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }  
`;

const Info = styled.div`
    padding: 20px;
    display:flex;
    justify-content: space-between;
    color:#888;
    font-size: 12px;
    font-weight: 500;
`;

export default PhotoItems;
