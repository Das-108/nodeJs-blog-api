import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axios-config'



const LoginPage = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ 
        email: '',
        password: '',
    })
    const [error, setError] = useState(null)

    const { email, password } = formData

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        try {
            const res = await api.post('/auth/login', formData)

            const receviedToken = res.data && res.data.token;

            if (receviedToken) {

                localStorage.setItem('token', receviedToken)
                console.log('Token saved login successful!')

                navigate('/adminhome')
            }else {
                setError('Login Succeeded, but security token was not recived')
            }

        } catch (error) {
            const errMsg = error.response?.data?.msg || 'Login failed due to server error.'
            setError(errMsg)
            console.error('Login Error: ', errMsg)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const sendToSignUp = () => {
        navigate('/signup')
    }

    const sendAdminPage = () => {
        navigate('/adminhome')
    }


  return (
    <div className='min-h-screen bg-amber-100 flex justify-center items-center'>
        <div className='w-[450px] border p-4 bg-white rounded-2xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-2xl'>Welocme Back</h1>
                <p className='text-lg text-gray-300'>Login to continue</p>
            </div>

                {/* Error Message */}
            { error && <p className='text-red-500 mb-3 text-center'>{error}</p>}

            <form
                onSubmit={handleSubmit}
                className='flex flex-col mb-3'
            >
                <label htmlFor="Email">Email</label>
                <input
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required 
                    placeholder='Enter your email' 
                />

                <label htmlFor="Password">Password</label>
                <input 
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange} 
                    required
                    placeholder='Enter your Password'
                />

                <p className='mb-3'><span className='text-blue-600'>Forgot password?</span></p>

                <button
                    className='bg-amber-400 text-white rounded p-2'
                    type='submit'             
                >
                    Login
                </button>
            </form>
            <p>Don't have account? <span className='text-blue-600' onClick={ sendToSignUp } >Sign Up</span></p>
        </div>
    </div>
  )
}

export default LoginPage