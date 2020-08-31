import React, { Component } from 'react';
import Products from './Products';
import Filter from './Filter';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      filteredProductList: []
    }
    this.handleChangeSort = this.handleChangeSort.bind(this)
    this.handleChangeSize = this.handleChangeSize.bind(this)
    this.sortProductList = this.sortProductList.bind(this)
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

  handleAddToCart(event, product) {
  }

  handleChangeSize(event) {
    this.setState({
      size: event.target.value
    })
    this.sortProductList();
  }

  handleChangeSort(event) {
    this.setState({
      sort: event.target.value
    })
    this.sortProductList();
  }

  sortProductList() {   
    this.setState(state => {
      if(state.sort) {
        state.productsList.sort((a, b) => state.sort === 'lowestprice' 
        ? ((a.price < b.price) ? 1 : -1)
        : ((a.price > b.price) ? 1 : -1))
      } else {
        state.productsList.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
      
      if(state.size) {
        return { 
          filteredProducts: state.productsList.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0)
        }
      }	  

      return {
        filteredProductList: state.productsList 
      }
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-align-center">Ecommerce Shopping Cart Application</h1>
        <hr/>
        <div className="row">
          <div className="col-md-10">
            <Filter 
             sort={this.state.sort}
             size={this.state.size}
             productsCount={this.state.filteredProductList.length} 
             handleChangeSort={this.handleChangeSort}
             handleChangeSize={this.handleChangeSize}
            />
            <Products products={this.state.filteredProductList} handleAddToCart={this.handleAddToCart}/>
          </div>
  
          <div className="col-md-2">SHOPPING CART</div>
        </div>
      </div>
    );
  }
}

export default Container;

