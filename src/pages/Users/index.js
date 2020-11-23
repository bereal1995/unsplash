import React from "react";
import styled from "styled-components";
import axios from 'axios';
import {useSelector} from "react-redux";
import {appActions} from "../../redux/ActionCreators";

function Users() {

    const app = useSelector(state => state.app);

    const getUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")

        appActions.updateState( {users: result.data});
    }

    return (
        <Container>
            <Button onClick={getUsers}>유저 리스트 보기</Button>
            {
                app.users.map((item, index)=> {
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
