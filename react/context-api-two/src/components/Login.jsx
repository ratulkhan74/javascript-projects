import React, { useState } from 'react'
import useUserContextProvider from '../contexts/user';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUserContextProvider();
    const handelFormSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }
    return (
        <div>
            <h6>user Login</h6>
            <div>
                <p>Username</p>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder='Username' />
            </div>
            <div>
                <p>Password</p>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder='Password' />
            </div>
            <br />
            <div>
                <input type='button' onClick={handelFormSubmit} value={'Login'} />
            </div>
        </div>
    )
}

export default Login