import { connect } from "react-redux";
import React from 'react';
import { login, clearReceiveErrors } from '../../actions/session_actions'
import Splash from "./splash";

const mapStateToProps = ({session, entities: { users }}) => ({
    currentUser: users[session.id]
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    clearReceiveErrors: () => dispatch(clearReceiveErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)