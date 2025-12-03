import React, { useEffect, useState } from 'react'
import api from '../utils/axios-config'
import { useNavigate, useParams } from 'react-router-dom'


const EditPage = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    title : '',
    content: '',
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [successMsg, setsuccessMsg] = useState(null)

  const { title, content } = formData

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`)
        setFormData ({
          title: res.data.title,
          content: res.data.content,
        })
        setLoading(false)
      } catch (error) {
        setError('Failed to load post data for editing. It may not exist.')
        setLoading(false)
        console.error('Fetch post Error: ' , error)        
      }
    }

    fetchPost()
  },[id])
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
    setError(null)
    setsuccessMsg(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setsuccessMsg(null)

    try {
      await api.patch(`posts/${id}`, formData)
      setsuccessMsg('Post updated successfully!')

      setTimeout(() => {
        navigate('/adminhome')
      },1000)

    } catch (error) {
      const errorMsg = error.response?.data?.msg || 'Failed to save changes.'
      setError(errorMsg)
      console.error('Update post Error: ', error)
    }
  }

  if(loading) return <div className='text-center p-10 font-semibold text-amber-600'>Loading post for editing.....</div>

  if(error && !title) return <div className='text-center p-10 text-red-500 font-semibold'>{error}</div>


  return (
    <div className='max-w-4xl mx-auto p-4'>

      {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
      {successMsg && <p className='text-green-500 text-center mb-4'>{successMsg}</p>}

        <form onSubmit={handleSubmit}>

          <h1 className='text-center m-4 font-bold tracking-wide'>
            <input 
              type="text"
              name='title' 
              value={title}
              onChange={handleChange}
              required
              className='text-3xl font-bold w-full text-center border-b-2 border-amber-300 focus:border-amber-300 transition'
            />
          </h1>

          

          <div className='mt-8 p-4 bg-gray-50 rounded-lg shadow-inner'>
            <textarea 
              name="content" 
              onChange={handleChange}
              required
              value={content}
              rows='15'
              // placeholder='start writing your post content here'
              className='w-full text-lg p-2 border-none focus:ring-0 focus:outline-none bg-transparent resize-none'
            >
           </textarea>
          </div>

          <div className='flex justify-end gap-3 mt-6'>
            <button
              type='button'
              onClick={() => navigate('/adminhome')}
              className='bg-gray300 text-gray-800 p-3 rounded-xl hover:bg-gray-600 transition shadow-md hover:shadow-lg'              
            >
              cancel / Back
            </button> 

            <button
              className='p-3 rounded-xl font-semibold text-white bg-blue-500 hover:bg-blue-600 transition shadow-md hover:shadow-lg'
            >
              Publish Changes
            </button>           
          </div>


        </form>
    </div>
  )
}

export default EditPage