import React, {useEffect} from 'react';
import styled from "styled-components";
import Routes from "./routes/Routes";
import {GlobalStyle} from "../lib/Styled";
import HeaderContainer from "./containers/HeaderContainer";
import PhotoPopupContainer from "./containers/PhotoPopupContainer";
import Api from "../api";




function App() {

    const getMe = async () => {
        const result = await Api.getMe()
        console.log('@@result',result);
    }
    useEffect(() => {
        getMe()
    },[])

    return (
        <Container>

            <GlobalStyle/>

            <HeaderContainer/>

            <Routes/>

            <PhotoPopupContainer/>

        </Container>
    )
}
const Container = styled.div`

`;


export default App;