import React, { useState } from "react";

const SignupForm = props => {

    const [state, setState] = useState({
        email: "",
        username: "",
        password: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.signup(state)
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
                <button className="formsubmit" onClick={handleSubmit}>Sign Up</button>
            { renderErrors() }
            </form>
        </div>
    )
}

export default SignupForm;