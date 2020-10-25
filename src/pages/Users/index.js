import React, {useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";

function Users() {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const getUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")

        dispatch(Action.Creators.setUsers(result.data));
    }

    return (
        <Container>
            <Button onClick={getUsers}>유저 리스트 보기</Button>
            {
                state.users.map((item, index)=> {
                    return <h1 key={index}>{item.name}</h1>
                })
            }
        </Container>
    )
}

const Container = styled.div`

`;

const Button = styled.div`
    
`;

export default Users;
