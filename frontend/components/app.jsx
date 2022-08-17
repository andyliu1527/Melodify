import React from "react";
import { Route } from "react-router-dom"
import { AuthRoute, ProtectedRoute } from "../utils/routes_util";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Navbar from "./navbar/navbar";
import Splash from "./splash/splash";

const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/main" component={GreetingContainer} />
  </div>
);

export default App;