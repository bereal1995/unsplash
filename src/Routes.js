import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import Explore from "./pages/Explore";

function Routes() {

  return (
      <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/brands"} component={Brands}/>
          <Route exact path={"/explore"} component={Explore}/>
      </Switch>
  )
}



export default Routes;