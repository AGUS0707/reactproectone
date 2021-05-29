import React from 'react';
import {Route} from 'react-router-dom'
import NotFound from "./NotFound";

const PrivateRoute = (props) => {
    return localStorage.getItem("logged") === "true" ?
        <Route {...props}/> :
        <Route component={NotFound}/>
};

export default PrivateRoute;