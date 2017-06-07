import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';

class AddToCart extends Component {
constructor(props){
    super(props);
    this.state = {
      isAddToCart : true,
      quantity_state : 1,
      isUpdateVal : true,
    }
  }

addToCartItem = (item) => {
  const { isAddToCart , isUpdateVal ,  quantity_state } = this.state;
  const { updateQuantity } = this.props;
  !isAddToCart ?   this.setState({isAddToCart : true}) :   this.setState({isAddToCart : false});
  this.setState ({ quantity_state :1 })
  this.setState({isUpdateVal : true},function() {
    this.props.updateQuantity(this.state.isUpdateVal , item, quantity_state)
  });
}

addMoreItemsToCart = (quan,item) => {
  const { quantity_state } = this.state;
  const {  quantity } = this.props;
  this.setState({isUpdateVal : true , quantity_state : quan + 1 },function() {
    this.props.updateQuantity(this.state.isUpdateVal, item ,this.state.quantity_state )
  });
}

removeIemsFromCart = (quan,item) => {
    const { quantity_state , isUpdateVal } = this.state;
    const { updateQuantity } = this.props;
    quantity_state > 1 ? this.setState ({ quantity_state : quan - 1 }) : this.setState ({isAddToCart : true});
    this.setState({isUpdateVal : false},function() {
      this.props.updateQuantity(this.state.isUpdateVal, item, this.state.quantity_state)
    });
}

render() {
    const { isAddToCart, quantity_state } = this.state;
    const { updateQuantity , quantity , item } = this.props;
    return (
      <div className={`row ${s.addCont}`}>
        { this.state.isAddToCart &&
          <button className={s.addTocart} onClick ={() => this.addToCartItem(item)}>Add To Cart</button>
        }
        {  !this.state.isAddToCart &&
        <div className = {s.addMore}>
          <button className = {s.minItems} onClick = { () => this.removeIemsFromCart(quantity_state, item)} > - </button>
          <button className = {s.moreItems}>{ quantity_state }</button>
          <button className = {s.plusItem} onClick = { () => this.addMoreItemsToCart(quantity_state ,item)} > + </button>
        </div>
       }
      </div>
    );
  }
}

export default withStyles(s)(AddToCart);
