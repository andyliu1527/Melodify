import { connect } from "react-redux";
import React from 'react';
import { signup, clearReceiveErrors } from '../../actions/session_actions'
import SignupForm from './signup_form'

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearReceiveErrors: () => dispatch(clearReceiveErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)