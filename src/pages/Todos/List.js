import React, {useEffect} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {todoActions} from "../../redux/ActionCreators";

function List(props) {

    const {

    } = props;

    const todo = useSelector(state => state.todo);

    useEffect( () => {
        todoActions.fetchTodos();
    }, [todo.triggerUpdate])

    const deleteTodo = (id) => todoActions.deleteTodo(id);


    return (
        <Container>
            <Button to={'/todos/write'}>추가하기</Button>
            {
                todo.list.map( (item, i) => (
                    <TodoItem key={i}
                              onDelete={deleteTodo}
                              {...item}
                    />
                ))
            }
        </Container>
    )
}

const Container = styled.div`
  padding: 20px;

  input {
    height: 50px;
    width: 70%;
    min-width: 400px;
    border: 1px solid #ddd;
    background:transparent;
    box-shadow: none;
    padding: 0 10px;
    font-size: 16px;
    &:focus {
      outline: 0;
    }
  }
`;

const Button = styled(Link)`
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

export default List;
