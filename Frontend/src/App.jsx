import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Header from './Componets/Header'
import Card from './Componets/Card'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import BlogDetailPage from './Pages/BlogDetailPage'
import AdminHome from './Pages/AdminHome'
import UserHome from './Pages/UserHome'
import { Route, Routes } from "react-router-dom"
import EditPage from './Pages/EditPage'
import DeletePage from './Pages/DeletePage'
import CreatePost from './Pages/CreatePost'


const App = () => {
  return (
    <div>

      <Routes>

        <Route path='/' element= {<UserHome />} />
        <Route path='/blogdetailpage' element= {<BlogDetailPage />} />
       
        <Route path='/loginpage' element= {<LoginPage />} />
        <Route path='/signup' element= { <SignUpPage /> } />

        <Route element={<ProtectedRoute />}>
          <Route path='/adminhome' element= {<AdminHome />} />
          <Route path='/edit-page/:id' element= { <EditPage />} />
          <Route path='/delete-page/:id' element = { <DeletePage /> } />
          <Route path='/create-post' element = { <CreatePost /> } />
        </Route>          

      </Routes>

    </div>
  )
}

export default App