import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Herosection from './Herosection'
import Statssection from './Statssection'
import Facilities from './Facilities'
import Ourpartners from './Ourpartners'
import Visualize from './Visualize'
import Events from './Events'
import Testimonials from './Testimonials'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Statssection/>
      <Facilities/>
      <Ourpartners/>
      <Visualize/>
      <Events/>
      <Testimonials/>
      <Footer/>
      
    </div>
  )
}

export default Home
