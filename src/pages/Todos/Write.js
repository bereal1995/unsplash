import React, {useState} from 'react';
import styled from "styled-components";
import {Action} from "../../redux/reducer";
import {useDispatch} from "react-redux";
import TodoForm from "../../components/form/TodoForm";

function Write(props) {

    const {
    
    } = props;

    const dispatch = useDispatch();
    const addTodo = (values) => dispatch(Action.Creators.addTodo(values));


    return (
      <Container>
          <TodoForm buttonText={'추가하기'}
                    onSubmit={addTodo}
          />
      </Container>
  )
}
const Container = styled.div`

`;

const EnterTodoContainer = styled.div`
    display:flex;
    padding: 20px;
`;

const Button = styled.div`
    background:#08c;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    color:#fff;
    margin-left: 20px;
    cursor:pointer;
`;


export default Write;