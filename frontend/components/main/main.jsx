import React, { Component } from "react"
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../utils/routes_util";
import NavbarContainer from "../navbar/navbar_container";
import SidebarContainer from "../sidebar/sidebar_container";
import HomeContainer from "../home/home_container";
import ArtistContainer from "../artist/artist_index_item_container";
import ArtistIndexContainer from "../artist/artist_index_container";
import ArtistShowContainer from "../artist/artist_show_container";

const Main = props => (
    <div id="main-app-container">
        <ProtectedRoute path ="/" component={SidebarContainer} />
        <ProtectedRoute path="/" component={NavbarContainer} />
        <ProtectedRoute exact path ="/" component={HomeContainer} />
        <ProtectedRoute exact path="/" component={ArtistIndexContainer} />
        <Route path ="/artists/:id" component={ArtistShowContainer} />
    </div>
)

export default Main;