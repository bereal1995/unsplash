import React from 'react';
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import List from "./List";
import Search from "./Search";

function index(props) {

    const {

    } = props;

  return (
      <Container>
          <Switch>
              <Route exact path={"/photos"} component={List}/>
              <Route path={"/photos/search/:query"} component={Search}/>
          </Switch>
      </Container>
  )
}
const Container = styled.div`

`;


export default index;