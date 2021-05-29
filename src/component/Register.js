import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation'

const Register = (props) => {
    // console.log(props);

    const RoyxatdanOtish = (event, errors, values) => {
       if (values.name.length > 0 && values.surnames.length > 0 && values.email.length > 0 && values.password.length > 0){
           localStorage.setItem("name", values.name);
           localStorage.setItem("surname", values.surnames);
           localStorage.setItem("email", values.email);
           localStorage.setItem("password", values.password);
           localStorage.setItem("logged", true);

           props.history.push("/");
       } else {
           alert("ma'lumotlarni to'ldiring")
       }


    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-3 offset-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={RoyxatdanOtish}>
                                <AvField type="text" className="mt-3" name="name" placeholder="Name:" />
                                <AvField type="text" className="mt-3" name="surnames" placeholder="Surname:" />
                                <AvField type="password" className="mt-3" name="password" placeholder="Password:" />
                                <AvField type="email" className="mt-3" name="email" placeholder="Email:" />
                                <button type="submit" className="btn btn-success mt-3">Register</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;