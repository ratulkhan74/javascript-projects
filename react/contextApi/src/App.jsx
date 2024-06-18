import './App.css'
import Login from './conponents/user/Login'
import Profile from './conponents/user/Profile'
import UserProvider from './contexts/user/UserProvider'

function App() {

  return (
    <UserProvider>
      <Login />
      <Profile />
    </UserProvider>
  )
}

export default App
