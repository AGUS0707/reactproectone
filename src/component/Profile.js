import React from 'react';

const Profile = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Sizning shaxsiy ma'lumotlaringiz</h1>
            <div className="row">
                <div className="col-4 offset-4 mt-3">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Salom {localStorage.getItem("name")} {localStorage.getItem("surname")}</h1>
                        </div>
                        <div className="card-body">
                            <p>{localStorage.getItem("email")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;