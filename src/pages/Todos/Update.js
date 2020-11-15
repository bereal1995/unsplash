import React, {useState} from 'react';
import styled from "styled-components";
import {Action} from "../../redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import TodoForm from "../../components/form/TodoForm";

function Update(props) {

    const {
        match,
    } = props;

    const dispatch = useDispatch();
    const todoDetail = useSelector(state => state.todoDetail);

    const id = match.params.id;
    const data = todoDetail[id];

    const updateTodo = (values) => dispatch(Action.Creators.updateTodo(id, values));

console.log('@@data',data);

    return (
      <Container>
          <TodoForm buttonText={'수하기'}
                    defaultValues={data}
                    onSubmit={updateTodo}
          />
      </Container>
  )
}
const Container = styled.div`

`;



export default Update;