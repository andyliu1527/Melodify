import React, { useState } from "react";

const LoginForm = props => {
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(state);
    }

    const update = field => {
        return e => setState({...state, [field]: e.currentTarget.value})
    }

    const renderErrors = () => {
        return (
            <ul>
                {props.errors.map((error, i) => (
                    <li className="login-errors" key={`${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <form className="sessionform">
            <h1>Login</h1>
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
                <button className="formsubmit" onClick={handleSubmit}>Log In</button>
            { renderErrors() }
            </form>
        </div>
    )
}

export default LoginForm;