import React from 'react'
import Footer from '../footer/Footer'
import Banner from './banner/Banner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Products from './products/Products'
import ShoppingContext from './context/ShoppingContext'

function Home () {
  return (
    <Router>
      <ShoppingContext>
        <Navbar />
        <Banner />
        <Switch>
          <Route exact path='/' component={Products} />
        </Switch>
        <Footer />
      </ShoppingContext>
    </Router>
  )
}

export default Home
