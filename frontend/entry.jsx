import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }


  window.signup = signup;
  window.login =  login;
  window.logout = logout;
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Root store={store} />);
});