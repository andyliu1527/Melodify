import React, { Component } from "react"
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../utils/routes_util";
import NavbarContainer from "../navbar/navbar_container";
import SidebarContainer from "../sidebar/sidebar_container";
import HomeContainer from "../home/home_container";
import DropDownContainer from "../dropdown/dropdown_container"

const Main = props => (
    <div id="main-app-container">
        <Route path ="/" component={SidebarContainer} />
        <ProtectedRoute exact path="/" component={NavbarContainer} />
        {/* <Route path ="/" component={DropDownContainer} /> */}
        <Route path ="/" component={HomeContainer} />
    </div>
)

export default Main;