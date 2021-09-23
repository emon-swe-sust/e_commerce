import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './products/Products'
import ShoppingContext from './context/ShoppingContext'
import Checkout from './checkout/Checkout'
import PageNotFound from './pageNotFound/PageNotFound'
import ConfirmPurchase from './checkout/ConfirmPurchase'

function Home () {
  return (
    <Router>
      <ShoppingContext>
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/checkout/' component={Checkout} />
          <Route exact path='/confirm/' component={ConfirmPurchase} />
          <Route path='*' component={PageNotFound} />
        </Switch>

      </ShoppingContext>
    </Router>
  )
}

export default Home
