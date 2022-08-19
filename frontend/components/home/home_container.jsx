import React from "react";
import { connect } from "react-redux";
import Home from "./home";


const mSTP = ({ session, entities: { users } })=> ({
    currentUser: users[session.id]
})

const mDTP = dispatch => ({
    
})

export default connect(mSTP, mDTP)(Home)