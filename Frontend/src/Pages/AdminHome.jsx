import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHome = () => {
    
    const navigate = useNavigate()

    const sendToCreatePost = () => {
        navigate('/create-post')
    }

  return (
    <div>
        <nav className='bg-red-800 flex justify-between px-3 py-4'>
            <h3 className='font-bold text-white'>Simple Blog Website</h3>
            <h6 className='font-medium text-white text-sm'>Welcome Back,Username</h6>
        </nav>

        <div className='mt-8 p-2'>
            <h4 className='font-medium text-2xl mb-2'>Your Posts</h4>
            <button onClick={ sendToCreatePost } className='border p-2 rounded-xl bg-amber-500 text-white hover:bg-white hover:text-black'>Create Post</button>

            
            <div className='border-amber-500 rounded m-6 border-t-6 p-2 bg-gray-100 shadow-sm flex'>
                <div>
                    <h4 className='p-2 font-bold tracking-wider'>title</h4>
                    <p className='p-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi id at ex aut officiis quo, dolore repudiandae praesentium expedita neque modi hic! Quod pariatur ut in nesciunt officia sapiente.</p>
                    <div className='flex gap-2 p-2'>
                        <i className="ri-calendar-2-line"></i>
                        <p className='font-medium text-sm'>12 dec,1:00 PM</p>                  
                    </div>
                </div>

                <div className='flex items-center gap-2 ml-2'>
                    <i className="ri-file-edit-line text-blue-600 text-2xl"></i>
                    <i className="ri-delete-bin-6-line text-2xl text-red-500"></i>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default AdminHome