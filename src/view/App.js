import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import Routes from "./routes/Routes";
import {GlobalStyle} from "../lib/Styled";
import HeaderContainer from "./containers/HeaderContainer";
import PhotoPopupContainer from "./containers/PhotoPopupContainer";
import Spinner from "./components/Spinner";




function App() {

    const app = useSelector(state => state.app);

    return (
        <Container>

            <GlobalStyle/>

            <HeaderContainer/>

            <Routes/>

            <PhotoPopupContainer/>
            <Spinner isLoading={app.isLoading}/>

        </Container>
    )
}
const Container = styled.div`

`;


export default App;