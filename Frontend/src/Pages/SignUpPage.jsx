import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axios-config'
import UserHome from './UserHome'

const SignUpPage = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ 
        username : '',
        email: '',
        password: '',
    })
    const [error, setError] = useState(null)
    const { username, email, password } = formData

    // Functions for navigation (Only keeping the used one)
    const sendLoginPage = () => {
        navigate('/loginpage')
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
        const res = await api.post('/auth/register', formData);
        
        const receivedToken = res.data?.token; // Use optional chaining for safety
        
        if (receivedToken) { 
            
            localStorage.setItem('token', receivedToken);
            
            // 🛑 FIX 1: Removed synchronous alert()
            console.log('Registration successful! Redirecting to /adminhome.'); 
            
            // 🛑 FIX 2: Use setTimeout to ensure the navigation executes cleanly
            setTimeout(() => {
                // Use the correct destination path
                navigate('/adminhome'); 
            }, 50); // A minimal delay to decouple the execution
            
        } else {
            console.error('Registration successful, but token missing.', res.data);
            setError('Registration succeeded, but auto-login failed. Please try logging in.');
            setTimeout(() => {
                navigate('/loginpage'); 
            }, 50);
        }
        }catch (error) {
            // This remains correct for showing backend error messages
            const errMsg = error.response?.data?.msg || 'Registration failed due to a network error.';
            setError(errMsg);
            console.error('Registration Error: ' , errMsg);
        }
    }


  return (
    <div className='min-h-screen bg-amber-100 flex justify-center items-center'>
        <div className='w-[450px] border p-4 bg-white rounded-2xl'>
            <div className=' m-2 text-center'>
                <h1 className='font-bold text-2xl' >Create an Account</h1>
                <p className='text-lg text-gray-300'>Register to get started</p>
            </div>
            
            <form
            onSubmit={handleSubmit}
            className='flex flex-col mt-4'
            >
                {/* Display error message */}
                {error && <p className="text-red-500 mb-3">{error}</p>}
                
                <label htmlFor="username">Username: </label>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={handleChange}
                    required
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    placeholder='Enter your username'                
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}
                    required // Ensure email is required
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    placeholder='Enter your email'
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange}
                    required
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    placeholder='Enter your password'
                />

                {/* Role selection removed: Backend defaults to 'user' */}
                
                <button                    
                    type='submit'
                    className='bg-amber-400 text-white rounded p-2 mb-2'
                >
                    Register
                </button>

                <p>Already have account <span className='text-blue-600 cursor-pointer' onClick={ sendLoginPage }> Login </span></p>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage