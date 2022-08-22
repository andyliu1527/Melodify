import React from "react"
import DropdownContainer from "../dropdown/dropdown_container";

const Navbar = props => {

    return (
        <div id="main-navbar">

            <div id="nav-buttons-container">
                <div id="nav-buttons">
                    <button><i className="fa-solid fa-chevron-left"></i></button>
                    <button><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <DropdownContainer />
        </div>
    )

}

export default Navbar;