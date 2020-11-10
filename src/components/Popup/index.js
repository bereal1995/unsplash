import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {Action} from "../../redux/reducer";

function Popup(props) {

    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(Action.Creators.updateState({
            popup: {
                title: '',
                content: ''
            }
        }))
    }

    return (
        <Container onClick={onClose}>
            <Content>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1500;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Content = styled.div`
    width:300px;
    padding: 30px;
    background: #fff;
    h2 {
      font-size: 22px;
      margin-bottom: 30px;
      color: #333;
      font-weight: 500;
    }
    p {
      font-size: 15px;
      color: #777777;
      line-height: 1.5;
    }
`;

export default Popup;
