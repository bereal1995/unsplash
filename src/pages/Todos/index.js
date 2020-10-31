import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";

function Todos(props) {

    const {

    } = props;

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [value, setValue] = useState("");

    useEffect( () => {
        getTodos();
    }, [state.triggerUpdate])

    const getTodos = async () => {
        const result = await axios.get("http://localhost:8080/todo");
        dispatch(Action.Creators.setTodos(result.data));
    }

    const onValue = (e) => {
        setValue(e.target.value);
    }

    const addTodo = async () => {
        const result = await axios.post("http://localhost:8080/todo", {
            title: value
        });
        dispatch(Action.Creators.triggerUpdate(!state.triggerUpdate))
    }

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:8080/todo/${id}`);
        dispatch(Action.Creators.triggerUpdate(!state.triggerUpdate))
    }
    

    return (
        <Container>
            <EnterTodoContainer>
                <input type="text"
                       onChange={onValue}
                />
                <Button onClick={addTodo}>추가하기</Button>
            </EnterTodoContainer>
            {
                state.todos.map( (item, i) => (
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

export default Todos;