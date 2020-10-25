import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Page404 from "./pages/Result/Page404";
import Popup from "./components/Popup";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "./redux/reducer";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  img {
    max-width: 100%;
  }
  
`;

function App() {

    const state = useSelector( (state) => state)
    const dispatch = useDispatch();

  return (
      <Container>
          <GlobalStyle/>
        <Header/>

        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/photos"} component={Photos}/>
            <Route path={"/todos"} component={Todos}/>
            <Route path={"/todos"} component={Todos}/>
            <Route path={"/users"} component={Users}/>
            <Route component={Page404}/>
        </Switch>
          {
              state.popup.title &&
              <Popup title={state.popup.title}
              description={state.popup.content}
              onClose={() => dispatch(Action.Creators.handlePopup({
                  title: "",
                  content: ""
              }))}
              />
          }
      </Container>
  )
}
const Container = styled.div`

`;


export default App;