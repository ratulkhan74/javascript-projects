import React, { useContext } from 'react'
import UserContext from '../../contexts/user/UserContext'

function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return <div>Please Login your account</div>
    return (
        <div>Welcom {user.username} !</div>
    )
}

export default Profile