import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import AddToCart from '../../components/AddToCart';

class Items extends Component {

render() {
    const { item , products, updateQuantity , quantity } = this.props;
    return (
          <div className={`col-xs-4 ${s.prodList}`} >
            <div className ={s.items}>
                <div className={s.brandImg}>
                  <img src={item.product_img}/>
                </div>
                <div className ={s.brandDet}>
                    <h5>{item.brand_name}</h5>
                    <p>{item.detail}</p>
                    <p>Rs.{item.price}</p>
               </div>
               <AddToCart
               updateQuantity = { updateQuantity }
               quantity = { quantity }
               item = { item }
               />
            </div>
          <div className={s.clearfix}/>
        </div>
    );
  }
}

export default withStyles(s)(Items);
