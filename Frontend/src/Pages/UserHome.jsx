import React, { use } from 'react'
import Card from '../Componets/Card'
import Header from '../Componets/Header'
import { useNavigate } from 'react-router-dom'


const UserHome = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/loginpage')
    }

    const handleSignUp = () => {
        navigate('/signup')
    }

  return (
    <div>
        <Header onLoginClick={handleLogin} onSignupClick = {handleSignUp} />
        <Card />
    </div>
  )
}

export default UserHome