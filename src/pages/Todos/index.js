import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import TodoItem from "./TodoItem";

function Todos(props) {

    const {

    } = props;

    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    useEffect( () => {
        getTodos();
    }, [])

    const getTodos = async () => {
        const result = await axios.get("http://localhost:7070/todo");
        setTodos(result.data);
    }

    console.log("@@ todos", todos);

    const onValue = (e) => {
        setValue(e.target.value);
    }

    const addTodo = async () => {
        const result = await axios.post("http://localhost:7070/todo", {
            title: value
        });
        setValue("");
    }

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:7070/todo/${id}`)
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
                todos.map( (item, i) => (
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
