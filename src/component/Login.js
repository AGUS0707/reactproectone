import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'

const Login = (props) => {

    const Kirish = (event, errors, values) => {
        {
            if (localStorage.getItem("email") === values.email && localStorage.getItem("password") === values.password){
                props.history.push("/profile");
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={Kirish}>
                                <AvField type="email" name="email" placeholder="Email:" />
                                <AvField type="password" className="mt-3" name="password" placeholder="Password:" />

                                <button type="submit" className="btn btn-success mt-3">LOGIN</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;