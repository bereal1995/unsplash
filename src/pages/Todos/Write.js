import React from 'react';
import styled from "styled-components";
import TodoForm from "../../components/form/TodoForm";
import {todoActions} from "../../redux/ActionCreators";

function Write(props) {

    const {
    
    } = props;

    const addTodo = (values) => todoActions.addTodo(values);

    return (
      <Container>
          <TodoForm buttonText={'추가하기'}
                    onValue={''}
                    onSubmit={addTodo}
          />
      </Container>
  )
}
const Container = styled.div`

`;

export default Write;