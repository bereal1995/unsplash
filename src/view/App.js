import React, {useEffect} from 'react';
import styled from "styled-components";
import Routes from "./routes/Routes";
import {GlobalStyle} from "../lib/Styled";
import HeaderContainer from "./containers/HeaderContainer";
import PhotoPopupContainer from "./containers/PhotoPopupContainer";
import {photoActions} from "../redux/ActionCreators";

function App() {

    useEffect(() => {
        photoActions.getMe();
    })

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