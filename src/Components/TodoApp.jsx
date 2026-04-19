import React from 'react'
import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link, Navigate } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider from './security/AuthContext'
import { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'
// installed router for making different routes for components and navigating from login to welcome


// to render components like welcome only after authenticated user
// user cant acess link directly from browser
function AuthenticatedRoute({ children }) {
  const authContext = useAuth()
  if (authContext.isAuthenticated) {
    return (
      children
    )
  }
  return <Navigate to='/' />
}

const TodoApp = () => {
  return (
    <div className='TodoApp'>

      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          
          <main>
            <div className='container'>
          <Routes>
            <Route path='/login' element={<LoginComponent />} > </Route>

            <Route path='/welcome/:username' element={
              <AuthenticatedRoute>
                <WelcomeComponent />
              </AuthenticatedRoute>
            } > </Route>
            <Route path='/todos' element={
              <AuthenticatedRoute>
              <ListTodosComponent />
              </ AuthenticatedRoute >

            } > </Route>

            <Route path='/todo/:id' element={
              <AuthenticatedRoute>
              <TodoComponent />
              </ AuthenticatedRoute >

            } > </Route>

            <Route path='/logout' element={
              <AuthenticatedRoute> 
              <LogoutComponent />
              </AuthenticatedRoute> 
              } > </Route>

            <Route path='*' element={<ErrorComponent />} > </Route>

          </Routes>
           </div>
          </main>
          <FooterComponent />

        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default TodoApp
