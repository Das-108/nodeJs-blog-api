import React from 'react'

const CreatePost = () => {
  return (
    <div>
        <form action="">
            <input
             type="text"
             placeholder='Enter your Title' 
            />

            <input 
                type="textarea" 
                name="" 
                id="" 
                placeholder='Description'
            />

            <button 
                className='border text-amber-400 p-2 rounded-xl bg-white  hover:shadow-lg'
                type='submit'
            >
                Post Blog
            </button>
        </form>
    </div>
  )
}

export default CreatePost