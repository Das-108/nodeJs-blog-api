import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axios-config'
import DeleteConfirmationModal from '../Componets/DeleteConfirmationModal'


const AdminHome = () => {

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [postToDelete, setPostToDelete] = useState(null)

    const fetchPosts = async () => {
        try {
            const res = await api.get('/posts')
            console.log('Backend posts:' , res)
            setPosts(res.data)
            setLoading(false)
        } catch (error) {
            setError(error.response?.data?.msg || "Failed to fetch posts.")
            setLoading(false)
            console.error("fetch Posts Error: " , error)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    if(loading) {
        return <div className="p-10 text-center font-semibold">Loading your posts.....</div>
    }

    if(error) {
        return <div className="p-10 text-center text-red-500 font-bold">Error: {error} </div>
    }


    const openDeleteModal = (post) => {
        setPostToDelete({ id: post._id, title: post.title})
        setShowModal(true)
    }

    const deletePost = async () => {

        const postId = postToDelete?.id
        const postTitle = postToDelete?.title

        if(!postToDelete) {
            console.error('Deletion failed: Post ID was undefined or null')
            setError("Error: cannot delete post. Missing ID.")
            setShowModal(false)
            setLoading(false)
            setPostToDelete(null)
            return
        }

        setShowModal(false)
        setLoading(true)
        
        try {
            await api.delete(`/posts/${postId}`)

            setPosts(posts.filter(post => post._id !== postId))
            alert(`Post "${postTitle}" deleted successfully!`)
        } catch (error) {
            setError(error.response?.data?.msg || "failed to delete post.")
        }finally {
            setPostToDelete(null)
            setLoading(false)
        }
    }



    const handleEdit = (postId) => {
        navigate(`/edit-page/${postId}`)
    }

    const sendToCreatePost = () => {
        navigate('/create-post')
    }


    const postItems = posts.map(post => (
        <div
            key={post._id}
            className='border-amber-500 rounded m-6 border-t-6 p-2 bg-gray-100 shadow-sm flex'
        >
            <div>
                <h4 className='p-2 font-bold tracking-wider'>{post.title}</h4>
                <p className='p-2 text-sm'>{post.content.substring(0 ,150)}</p>
                <div className='flex gap-2 p-2'>
                    <i className="ri-calendar-2-line"></i>
                    <p className='font-medium text-sm'>{new Date(post.createdAt).toLocaleDateString()}</p>                  
                </div>
            </div>

            <div className='flex items-center gap-2 ml-2'>
                <i onClick={() => handleEdit (post._id)} className="ri-file-edit-line text-blue-600 text-2xl"></i>
                <i onClick={() => openDeleteModal(post)} className="ri-delete-bin-6-line text-2xl text-red-500"></i>
            </div>
        </div>
    ))

  return (
    <div>
        <nav className='bg-red-800 flex justify-between px-3 py-4'>
            <h3 className='font-bold text-white'>Simple Blog Website</h3>
            <h6 className='font-medium text-white text-sm'>Welcome Back,</h6>
        </nav>

        <div className='mt-8 p-2'>
            <h4 className='font-medium text-2xl mb-2'>Your Posts</h4>
            <button onClick={ sendToCreatePost } className='border p-2 rounded-xl bg-amber-500 text-white hover:bg-white hover:text-black'>Create Post</button>

            { 
                posts.length > 0? (
                    <div>{postItems}</div>
                ) : (
                    <p className='mt-4 text-gray-600'> You haven't created any posts yet</p>
                )
            }            
        </div>

        <DeleteConfirmationModal
            show={showModal}
            post={postToDelete}
            onDelete={deletePost}
            onClose={() => setShowModal(false)}
        />
    </div>
  )
}

export default AdminHome