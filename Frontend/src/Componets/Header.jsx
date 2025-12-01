import React from 'react'

const Header = ( { onLoginClick, onSignupClick }) => {
  return (
    <nav className='bg-amber-400 py-3 p-2 flex justify-between'>
        <h1 className='text-xl font-medium text-white'>Simple Blog Website</h1>

        <div className='flex gap-4'>
            <button 
              className='border p-2 rounded-xl bg-amber-400 text-white hover:bg-white hover:text-black'
              onClick={onLoginClick}
            >
              Login
            </button>

            <button
            onClick={onSignupClick}
             className='border text-amber-400 p-2 rounded-xl bg-white  hover:shadow-lg'
            >
              SignUp
            </button>
        </div>
    </nav>
  )
}

export default Header