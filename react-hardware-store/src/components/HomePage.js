import React, { Component } from 'react'
import Header from './Header'
import Shop from './Shop'
import CartView from './CartView'

class HomePage extends Component {
  render () {
    return (
      <div>
        <Header />
        <hr />
        <Shop />
      </div>
    )
  }
}

export default HomePage