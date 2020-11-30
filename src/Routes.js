import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Topic from "./pages/Topic";
import User from "./pages/User";

function Routes() {

  return (
      <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/brands"} component={Brands}/>
          <Route exact path={"/explore"} component={Explore}/>
          <Route exact path={"/search/:id"} component={Search}/>
          <Route exact path={"/topic/:id"} component={Topic}/>
          <Route exact path={"/user/:id"} component={User}/>
      </Switch>
  )
}



export default Routes;