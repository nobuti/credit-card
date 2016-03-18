import React from 'react';
import ReactDOM from 'react-dom';
import CreditCard from './creditcard';

let types = {
  'Visa': /^4/,
  'MasterCard': /^5[0-5]/,
  'Amex': /^3[47]/
};

ReactDOM.render(<CreditCard types={types}/>, document.getElementById('app'));
