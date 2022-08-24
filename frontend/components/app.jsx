import React from "react";
import { Switch, Route } from "react-router-dom"
import { AuthRoute, ProtectedRoute } from "../utils/routes_util";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path='/' component={SplashContainer} />
    </Switch>
  </>
);

export default App;