import { useState } from 'react'
import Layout from './layout/Layout';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
