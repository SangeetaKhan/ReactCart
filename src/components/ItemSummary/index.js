import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';

class ProductSummary extends Component {

render() {
    const {
      updateQuantity,
      quantity ,
      price ,
      item,
      updateValue,
      itemQuan,
      prodObj,
    } = this.props;
    return (
          <div className={`col-xs-4 ${s.summary}`} >
            <h4>Your cart summary</h4>
            <div className = {s.itemSum}>
              <div className ={s.items}>
                <h5>Items in cart</h5>
                <p>{ quantity }</p>
              </div>
              <div className ={s.total}>
                <h5>Total Rs</h5>
                <span>Rs { price }</span>
              </div>
              <div className={s.clearfix}/>
            </div>
            <div className = {s.summaryTable}>
              <table>
                <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prodObj.map((item, i) =>
                      <tr key ={i}>
                        <td>{item.brand_name}</td>
                        <td>{item.itemQuan}</td>
                        <td>{item.itemQuan * item.price}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
            </div>
        </div>
    );
  }
}

export default withStyles(s)(ProductSummary);
