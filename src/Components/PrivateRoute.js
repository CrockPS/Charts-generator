import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
    const jwtValue = !!localStorage.getItem('jwt');
    return jwtValue ? <Route {...props}/> : <Redirect to="/Login"/>
}

export default PrivateRoute;