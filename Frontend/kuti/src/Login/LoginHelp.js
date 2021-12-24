import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginHelp = () => {

    const Navigate = useNavigate();
    return (
        <div>
            <h1>Login Page</h1>
        {/* {alert('You fucked up!')} */}
        {Navigate("/login")}
        </div>
    )
}

export default LoginHelp;