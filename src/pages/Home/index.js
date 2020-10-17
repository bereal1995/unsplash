import React, {useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

function Home() {

    useEffect( () => {
        getServerData()
    }, [])

    const getServerData = async () => {
        const result = await axios.get("http://localhost:7070/user?name=jo&price=5000&sort=new");
        console.log("@@ result", result);
    }

    return (
        <Container>
            Home
        </Container>
    )
}

const Container = styled.div`

`;

export default Home;
