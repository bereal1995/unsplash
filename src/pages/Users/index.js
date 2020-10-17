import React, {useState} from "react";
import styled from "styled-components";
import axios from 'axios';

function Users() {

    const getUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")

        setUsers(result.data);
    }

    const [users, setUsers] = useState([]);


    return (
        <Container>
            <Button onClick={getUsers}>유저 리스트 보기</Button>
            {
                users.map((item, index)=> {
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
