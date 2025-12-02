import React, { use } from 'react'
import Card from '../Componets/Card'
import Header from '../Componets/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const UserHome = () => {
    const navigate = useNavigate()


    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleLogin = () => {
        navigate('/loginpage')
    }

    const handleSignUp = () => {
        navigate('/signup')
    }

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/v1/posts')

          setPosts(response.data)
          console.log('fetched data: ' ,response.data)

        } catch (error) {
          console.error('Error fetching posts:' ,error)
          setError('Failed to load posts.')
        }finally {
          setLoading(false)
        }
      }

      fetchPosts()
    },[])

    if(loading) {
      return <div className="font-bold">Loading Posts.....</div>
    }

    if(error) {
      return <div className="font-bold">Error: {error}</div>
    }


  return (
    <div>
        <Header onLoginClick={handleLogin} onSignupClick = {handleSignUp} />
        <Card />
    </div>
  )
}

export default UserHome