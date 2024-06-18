import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { UserProvider } from './contexts/user'
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserProvider value={{ user, setUser }}>
      <Login />
      <Profile />
    </UserProvider>
  )
}

export default App
