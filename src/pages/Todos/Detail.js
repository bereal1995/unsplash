import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {todoActions} from "../../redux/ActionCreators";

function Detail(props) {

    const {
        location,
        history,
        match,
    } = props;

    const todoDetail = useSelector(state => state.todo.detail);

    const id = match.params.id;
    const data = todoDetail[id];

    const fetchTodoById = () => todoActions.fetchTodoById(id);
    
    useEffect(() => {
        if (!data) {
            fetchTodoById();
        }
    },[])

  return (
      <Container>
          <h2>{data?.completed ? "완료" : "미완료"}</h2>
          <h1>{data?.title}</h1>
          <Button to={`/todos/update/${id}`}>수정하기</Button>
      </Container>
  )
}
const Container = styled.div`

`
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


export default Detail;