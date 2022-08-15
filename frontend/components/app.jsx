import React from "react";
import { Route } from "react-router-dom"
import Greeting_container from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";

const App = () => (
  <div>
    <h1>Hello, welcome to Melodify!</h1>
    <Greeting_container />
    <Route exact path="/login" component={LoginFormContainer} />
  </div>
);

export default App;