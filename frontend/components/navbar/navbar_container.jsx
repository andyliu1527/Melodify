import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions"
import Navbar from "./navbar";



const mSTP = ({ session, entities: { users } })=> ({
    currentUser: users[session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar)