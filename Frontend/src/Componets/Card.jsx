import React from 'react'

const Card = ({ postTitle, postContent, postTime }) => {
  return (
    <div>
        <div className='border-amber-500 rounded m-6 border-t-6 p-2 bg-gray-100 shadow-sm'>
            <h4 className='p-2 font-bold tracking-wider'>{postTitle}</h4>
            <p className='p-2 text-sm'>{postContent}</p>
            <div className='flex gap-2 p-2'>
              <i className="ri-calendar-2-line"></i>
              <p className='font-medium text-sm'>{postTime}</p>
            </div>
        </div>
    </div>
  )
}

export default Card