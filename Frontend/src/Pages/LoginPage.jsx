import React from 'react'
import { use } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()

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

            <form
                className='flex flex-col mb-3'
            >
                <label htmlFor="Email">Email</label>
                <input
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    type="email"
                    name=""
                    id="" 
                    placeholder='Enter your email' 
                />

                <label htmlFor="Password">Password</label>
                <input 
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    type="password"
                    name=""
                    id="" 
                    placeholder='Enter your Password'
                />

                <p className='mb-3'><span className='text-blue-600'>Forgot password?</span></p>

                <button
                    onClick={ sendAdminPage } 
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