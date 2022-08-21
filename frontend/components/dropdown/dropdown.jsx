import React, { useState }from "react";

const DropDown = props => {

    const [state, setState] = useState({
        show: false
    })

    const showDropDown = () => {
        let showBool = state.show
        setState({show: !showBool})
    }

    const closeDropDown = () => {
        setState({show: false})
    }

    const DropDownContent = () => {
        return (
        <div id="dropdown-content">
            <div>Github</div>
            <div>LinkedIn</div>
            <div>Profile</div>
            <div onClick={props.logout}>Logout</div>
        </div>
        )
    }

    return (
        <button id="dropdown-container" onClick={showDropDown} onBlur={closeDropDown}>
            <h1><i className="fa-solid fa-circle-user"></i>Hello {props.currentUser.username}</h1>
            {state.show ? <DropDownContent /> : null}
        </button>
    )
}


export default DropDown;