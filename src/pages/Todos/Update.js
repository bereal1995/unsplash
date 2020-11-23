import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import TodoForm from "../../components/form/TodoForm";
import {todoActions} from "../../redux/ActionCreators";

function Update(props) {

    const {
        match,
    } = props;

    const todoDetail = useSelector(state => state.todo.detail);

    const id = match.params.id;
    const data = todoDetail[id];

    const updateTodo = (values) => todoActions.updateTodo(id, values);

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