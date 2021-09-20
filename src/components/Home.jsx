import React from 'react'
import Footer from '../footer/Footer'
import Banner from './banner/Banner'
// import { Router, Switch } from 'react-router'
import Navbar from './navbar/Navbar'

function Home() {
    return (
        <div>
          <Navbar />
          <Banner />
          <Footer />
        </div>
    )
}

export default Home
