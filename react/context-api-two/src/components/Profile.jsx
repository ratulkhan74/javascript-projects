import React from 'react'
import useUserContextProvider from '../contexts/user'

function Profile() {
    const {user} = useUserContextProvider();
    if(!user) return <div>Please Login</div>
  return (
    <div>Welcome Back {user.username}</div>
  )
}

export default Profile