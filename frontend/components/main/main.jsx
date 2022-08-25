import React, { Component } from "react"
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../utils/routes_util";
import NavbarContainer from "../navbar/navbar_container";
import SidebarContainer from "../sidebar/sidebar_container";
import HomeContainer from "../home/home_container";
import ArtistShowContainer from "../artist/artist_show_container";
import AlbumShowContainer from "../albums/album_show_container";

const Main = props => (
    <div id="main-app-container">
        <ProtectedRoute path ="/" component={SidebarContainer} />
        <ProtectedRoute path="/" component={NavbarContainer} />
        <ProtectedRoute exact path ="/" component={HomeContainer} />
        <div id="main-content">
        <Switch>
            <ProtectedRoute exact path ="/artists/:id" component={ArtistShowContainer} />
            <ProtectedRoute exact path ="/albums/:id" component={AlbumShowContainer} />
        </Switch>
        </div>
    </div>
)

export default Main;