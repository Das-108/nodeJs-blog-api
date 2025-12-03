import React, { useState } from 'react'
import api from '../utils/axios-config'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({ 
    title: '',
    content: '',
  })
  const [error, setError] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)
  
  const { title , content } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccessMsg(null)

    try {
      await api.post('/posts', formData)

      setSuccessMsg('Post Created succesfully!')

      setTimeout(() => {
        navigate('/adminhome')
      }, 2000);

    } catch (error) {
      const errMsg = error.response?.data?.msg || 'Failed to create post. check server status.'
      setError(errMsg)
      console.error('Create post Error:' , error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-200/60 px-4">
      <div className="bg-white w-full max-w-xl p-6 rounded-3xl shadow-xl border border-amber-300/30">
        <h1 className="text-3xl font-bold text-center text-amber-600 mb-6">
          Create a Blog
        </h1>

        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
        {successMsg && <p className=' text-green-500 mb-4 text-center'>{successMsg}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border rounded-xl p-3 border-amber-300 focus:ring-2 focus:ring-amber-400 focus:outline-none transition"
            type="text"
            name='title'
            value={title}
            onChange={handleChange}
            required
            placeholder="Enter your Title"
          />

          <textarea
            name='content'
            onChange={handleChange}
            required
            value={content}
            className="border rounded-xl p-3 h-40 border-amber-300 resize-none focus:ring-2 focus:ring-amber-400 focus:outline-none transition"
            placeholder="Description"
          ></textarea>

          <button
            className="p-3 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600 transition shadow-md hover:shadow-lg"
            type="submit"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
