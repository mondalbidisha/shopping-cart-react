import React, { Component } from 'react';
import Products from './Products';

class Container extends Component {

  constructor() {
    super();
    this.state = {
      productsList: [],
      filteredProductList: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/products').then((response) => response.json())
    .then((jsonResponse) => {
      this.setState({
        productsList: jsonResponse,
        filteredProductList: jsonResponse
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-align-center">Ecommerce Shopping Cart Application</h1>
        <hr/>
        <div className="row">
          <div className="col-md-10">
            ALL PRODUCTS
            <Products products={this.state.filteredProductList} handleAddToCart={this.handleAddToCart}/>
          </div>
  
          <div className="col-md-2">SHOPPING CART</div>
        </div>
      </div>
    );
  }
}

export default Container;

