import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/register" exact component={Register} />
                <PrivateRoute path="/login" exact component={Login} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;