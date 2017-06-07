import {
  FETCH_ITEMS,
  UPDATE_QUANTITY
} from './constants';

export default function CartReducer(state = null, action) {
  if (state === null) {
    return {
      products: [],
      quantity :0,
      prodObj :[],
      price : 0,
    };
  }
  switch (action.type) {
    case FETCH_ITEMS: {
      const payload = action.payload.products;
      return {
        ...state,
        products:payload,
      };
    }

    case UPDATE_QUANTITY : {
      const updateValue = action.updateValue;
      const item = action.item;
      item.itemQuan = action.itemQuan;
      const priceAmt = action.item.price;
      const quantity = updateValue ? state.quantity + 1 : state.quantity - 1;
      const price = updateValue ? state.price + priceAmt : state.price - priceAmt;
      state.prodObj.indexOf(item) === -1 ? state.prodObj.push(item) :'';
      item.itemQuan <=1 && updateValue === false ? state.prodObj.pop(item) : '';
      return {
        ...state,
        updateValue,
        item,
        quantity,
        price,
      }
    }

    default: {
      return state;
    }
  }
}
