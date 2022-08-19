import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const SignupForm = props => {

    const [state, setState] = useState({
        email: "",
        username: "",
        password: ""
    })

    const demoLogin = (e) => {
        e.preventDefault();
        props.login({
            username: "demoUser",
            password: "demo123"
        }).then( () => props.history.push('/'));
    }

    useEffect( () => {
        return () => {props.clearReceiveErrors();}
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        props.signup(state)
    }

    const update = field => {
        return e => setState({...state, [field]: e.currentTarget.value})
    }

    const renderErrors = () => {
        return (
            <ul className="errors">
                {props.errors.map((error, i) => (
                    <li className="login-errors" key={`${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    return (
        <div className="sessionform-container">
            <div className="formlogo-container">
                <a href="#/"><img src={window.logoForm} className="formlogo"/></a>
            </div>
            <form className="sessionform">
            <h1>Sign up with your email address</h1>
            <br />
                <label>What's your email?
                    <br />
                    <input className="forminput" type="text" value={state.email} onChange={update("email")} placeholder="Enter your email."/>
                </label>
                <br/>
                <label>What should we call you?
                    <br />
                    <input className="forminput" type="text" value={state.username} onChange={update("username")} placeholder="Enter a username."/>
                </label>
                <br/>
                <label>Create a password
                    <br />
                    <input className="forminput" type="password" value={state.password} onChange={update("password")} placeholder="Create a password."/>
                </label>
                <br />
                <button className="formsubmit" onClick={handleSubmit}>SIGN UP</button>
                <br />
                <button className="formsubmit" onClick={demoLogin}>DEMO LOG IN</button>
            { renderErrors() }
            </form>
            <div className="sessionform-footer-container">
                <div className="seperator"></div>
                <div className="sessionform-footer">
                    <h1 className="sessionform-footer-h1">Already have an account?</h1>
                    <a href="#/login"><button className="formsubmit">LOG IN</button></a>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignupForm);