import { useState } from 'react'
import Layout from './layout/layout';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route element={<Layout/>}/>
            <Route path='/' element={<Layout/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
