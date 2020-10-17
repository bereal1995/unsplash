import React from "react";
import styled from "styled-components";

function TodoItem(props) {

    const {
        _id,
        title,
        completed,
        onDelete
    } = props;

    return (
        <Container completed={completed}>
            <h2>{_id}. {title}</h2>
            <Delete onClick={() => onDelete(_id)}>삭제</Delete>
        </Container>
    )
}

const Container = styled.div`
  background:#ccc;
  padding: 10px;
  margin: 10px;
  
  ${ props => props.completed && `
      background: chocolate;
      text-decoration: line-through;
  `}
`;

const Delete = styled.div`
    
`;

export default TodoItem;
