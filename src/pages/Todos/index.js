import React from 'react';
import styled from "styled-components";
import {Switch,Route} from 'react-router-dom';
import List from "./List";
import Detail from "./Detail";
import Write from "./Write";
import Update from "./Update";

function Todos(props) {

    const {

    } = props;

  return (
      <Switch>
        <Route exact path={'/todos'} component={List}/>
        <Route path={'/todos/detail/:id'} component={Detail}/>
        <Route path={'/todos/write'} component={Write}/>
        <Route path={'/todos/update/:id'} component={Update}/>
      </Switch>
  )
}
const Container = styled.div`

`;


export default Todos;