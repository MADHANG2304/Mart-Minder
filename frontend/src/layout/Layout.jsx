import React from 'react'
import Navbar from '../components/Navbar'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Products from '../pages/Products'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <About/>
      <Products/>
    </div>
  )
}

export default Layout
