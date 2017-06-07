import React,{ PropTypes, Component }from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.css';
import { connect } from 'react-redux';
import DisplayedItems from '../../components/DisplayedItems';
import ProductSummary from '../../components/ItemSummary';
import {
  fetchItems,
  updateQuantity
} from './actions';

class Cart extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchItems();
  }
  render() {
    const {
      products ,
      quantity ,
      updateQuantity ,
      price,
      item,
      updateValue,
      itemQuan,
      prodObj,
    } = this.props;
    return (
      <div className={s.root}>
      <DisplayedItems
        products = { products }
        updateQuantity = { updateQuantity }
        quantity = { quantity }
        itemQuan = { itemQuan }
      />
      <ProductSummary
        quantity = { quantity }
        updateQuantity = { updateQuantity }
        price = { price }
        item = { item }
        updateValue = { updateValue }
        prodObj = { prodObj }
       />
      </div>
    );
  }
}

Cart.propTypes = {
  fetchItems: PropTypes.func,
  title: PropTypes.string.isRequired,
  products:PropTypes.array.isRequired,
};

const mapDispatchToProps = {
  fetchItems,
  updateQuantity
};

const mapStateToProps =({ CartReducer }) =>  ({
  products: CartReducer.products,
  quantity :CartReducer.quantity,
  price : CartReducer.price,
  item : CartReducer.item,
  updateValue : CartReducer.updateValue,
  prodObj : CartReducer.prodObj,
});

export default withStyles(s)(connect(mapStateToProps,mapDispatchToProps)(Cart));
