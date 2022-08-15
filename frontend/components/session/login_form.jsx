import react, { useState } from "react";
import { login } from '../../actions/session_actions';

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
        return e => setState({[field]: e.currentTarget.value})
    }

    return (
        <div>
            <form>
                <label>Username
                    <input type="text" value={state.username} onChange={update(username)}/>
                </label>
                <br />
                <label>Password
                    <input type="password" value={state.password} onChange={update(password)}/>
                </label>
                <button onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    )
}