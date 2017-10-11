import React, { Component } from 'react'
import Product from './Product'

class CartView extends Component {
  render () {
    return (
      <div className="cart">
        <h1>Cart</h1>
      { this.props.Cart.map((product, index) => {
        return (
          <div key={index}>
          <Product
          productName={product.productName}
          price={product.price}
          description={product.description}
          />
          <button onClick={() => this.prop.addProductToCart(index)}>Delete</button>
        </div> )
          
        
      }
      )}
      
      <h2>addProductToCart</h2>
      </div>

            
      
    )
  }
}

export default CartView