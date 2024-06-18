import React, { useContext, useState } from 'react'
import UserContext from './../../contexts/user/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext)
    const handelSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div style={{ border: '1px solid #cfcfcf', padding: '15px', marginBottom:'15px' }}>
            <div>
                <h1>User Login</h1>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username' />
                {" "}
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' />
                <button onClick={handelSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login