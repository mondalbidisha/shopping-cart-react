import React, { Component } from 'react';
import './../index.css'

class Filter extends Component {

  render() {
    return (
      <div>
        <div className="container filter-container">
          <div className="row filter-row">
            <div className="col-md-4 result-height">
              {this.props.productsCount} Products found. 
            </div>
            <div className="col-md-4">
              <label>
                Order by
                <select
                  className="form-control"
                  value={this.props.sort}
                  onChange={(event) => {
                    this.props.handleChangeSort(event);
                  }}
                >
                  <option value="">Select</option>
                  <option value="lowestprice">Lowest to highest</option>
                  <option value="highestprice">Highest to lowest</option>
                </select>
              </label>
            </div>
            <div className="col-md-4">
            <label>
                Filter by Size
                <select
                  className="form-control"
                  value={this.props.size}
                  onChange={(event) => {
                    this.props.handleChangeSize(event);
                  }}
                >
                  <option value="">Select</option>
                  <option value="">ALL</option>
                  <option value="x">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                  <option value="xxl">XXL</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Filter;