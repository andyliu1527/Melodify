import { connect } from "react-redux";
import React from 'react';
import { login, clearReceiveErrors } from '../../actions/session_actions'
import LoginForm from './login_form'

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    clearReceiveErrors: () => dispatch(clearReceiveErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)