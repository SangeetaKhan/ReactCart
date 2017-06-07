import fetch from 'isomorphic-fetch';
import {
  FETCH_ITEMS,
  UPDATE_QUANTITY
} from './constants.js';

export function fetchItems() {
  return async dispatch => {
    const resp = await fetch('https://api.myjson.com/bins/y7a9l');
    const dataPromise = await resp.json();
    const payload = await dataPromise;
      dispatch({
        type: FETCH_ITEMS,
        payload,
      });
  };
}

export function updateQuantity(updateValue,item,itemQuan){
  return  dispatch => {
  dispatch({
    type: UPDATE_QUANTITY,
    updateValue,
    item,
    itemQuan
  });
};
}
