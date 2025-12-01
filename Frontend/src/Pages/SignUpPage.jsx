import React from 'react'
import { useNavigate } from 'react-router-dom'


const SignUpPage = () => {
    const navigate = useNavigate()

    const sendAdminPage = () => {
        navigate('/adminhome')
    }

    const sendLoginPage = () => {
        navigate('/loginpage')
    }

  return (
    <div className='min-h-screen bg-amber-100 flex justify-center items-center'>
        <div className='w-[450px] border p-4 bg-white rounded-2xl'>
            <div className=' m-2 text-center'>
                <h1 className='font-bold text-2xl' >Create an Account</h1>
                <p className='text-lg text-gray-300'>Register to get started</p>
            </div>

            <form
            action=""
            className='flex flex-col mt-4'
            >
                <label htmlFor="Username">Username: </label>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    placeholder='Enter your username'                
                />

                <label htmlFor="Email">Email</label>
                <input 
                    type="email" 
                    name="" 
                    id="" 
                    className='border-gray-200 border p-2 rounded-xl mb-3'
                    placeholder='Enter your email'
                />

                <label htmlFor="Role">Role</label>
                <select
                name="accessLevel-select" 
                id=""
                className='border-gray-200 border p-2 rounded-xl mb-3'
                >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>

                <button
                    onClick={ sendAdminPage }
                    type='submit'
                    className='bg-amber-400 text-white rounded p-2 mb-2'
                >
                    Register
                </button>

                <p>Already have accounct <span className='text-blue-600' onClick={ sendLoginPage }> Login </span></p>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage