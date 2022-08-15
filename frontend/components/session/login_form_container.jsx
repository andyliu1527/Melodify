import { connect } from "react-redux";
import react from 'react';
import { login } from '../../actions/session_actions'
import LoginForm from './login_form'

const mapStateToProps = state => ({
    errors: errors.session,
    formType: "Login"
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)