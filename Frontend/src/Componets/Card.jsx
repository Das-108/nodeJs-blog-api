import React from 'react'

const Card = () => {
  return (
    <div>
        <div className='border-amber-500 rounded m-6 border-t-6 p-2 bg-gray-100 shadow-sm'>
            <h4 className='p-2 font-bold tracking-wider'>title</h4>
            <p className='p-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi id at ex aut officiis quo, dolore repudiandae praesentium expedita neque modi hic! Quod pariatur ut in nesciunt officia sapiente.</p>
            <div className='flex gap-2 p-2'>
              <i className="ri-calendar-2-line"></i>
              <p className='font-medium text-sm'>12 dec,1:00 PM</p>
            </div>
        </div>
    </div>
  )
}

export default Card