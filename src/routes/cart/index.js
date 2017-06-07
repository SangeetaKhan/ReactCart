import React from 'react';
import Cart from '../../containers/Shopping';


const title = 'Shopping Cart';

export default {

  path: '/shopping-cart',

  action() {
    return {
      title,
      component: <Cart title={title}/>,
    };
  },

};
