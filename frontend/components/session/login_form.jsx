import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const LoginForm = props => {
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    useEffect( () => {
        return () => {props.clearReceiveErrors();}
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(state);
    }

    const demoLogin = (e) => {
        e.preventDefault();
        props.login({
            username: "demoUser",
            password: "demo123"
        }).then( () => props.history.push('/'));
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
            <h1>To continue, login to Spotify.</h1>
            <br />
                <label>Username
                    <br />
                    <input className="forminput" type="text" value={state.username} onChange={update("username")} placeholder="Email Address or Username"/>
                </label>
                <br/>
                <label>Password
                    <br />
                    <input className="forminput" type="password" value={state.password} onChange={update("password")} placeholder="Password"/>
                </label>
                <br />
                <button className="formsubmit" onClick={handleSubmit}>LOG IN</button>
                <br />
                <button className="formsubmit" onClick={demoLogin}>DEMO LOG IN</button>
            { renderErrors() }
            </form>
            <div className="sessionform-footer-container">
                <div className="seperator"></div>
                <div className="sessionform-footer">
                    <h1 className="sessionform-footer-h1">Don't have an account?</h1>
                    <a href="#/signup"><button className="formsubmit">SIGN UP</button></a>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LoginForm);