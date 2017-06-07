import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import Items from '../../components/Items';

class DisplayedItems extends Component {

render() {
    const { products, updateQuantity , quantity , itemQuan } = this.props;
    return (
      <div className={`row ${s.prodCont}`}>
          {products.map((item, i) =>
            <Items
            item = { item }
            updateQuantity = { updateQuantity }
            quantity = { quantity }
             />
          )}
      </div>
    );
  }
}

export default withStyles(s)(DisplayedItems);
