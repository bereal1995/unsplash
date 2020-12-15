import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Topic from "./containers/TopicContainer";
import User from "./containers/UserContainer";
import PhotoPopupContainer from "./containers/PhotoPopupContainer";
import Login from "./pages/Login";
import Join from "./pages/Join";

function Routes() {

  return (
      <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={'/photo/:id'} component={PhotoPopupContainer}/>
          <Route path={"/brands"} component={Brands}/>
          <Route path={"/explore"} component={Explore}/>
          <Route path={"/search/:id"} component={Search}/>
          <Route path={"/topic/:id"} component={Topic}/>
          <Route path={"/user/:id"} component={User}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/join"} component={Join}/>
      </Switch>
  )
}



export default Routes;