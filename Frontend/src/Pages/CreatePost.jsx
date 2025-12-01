import React from 'react'

const CreatePost = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-200/60 px-4">
      <div className="bg-white w-full max-w-xl p-6 rounded-3xl shadow-xl border border-amber-300/30">
        <h1 className="text-3xl font-bold text-center text-amber-600 mb-6">
          Create a Blog
        </h1>

        <form className="flex flex-col gap-4">
          <input
            className="border rounded-xl p-3 border-amber-300 focus:ring-2 focus:ring-amber-400 focus:outline-none transition"
            type="text"
            placeholder="Enter your Title"
          />

          <textarea
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
