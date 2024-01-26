import React from 'react';
 
const OrdersContext = React.createContext({
  
  isOpen:false,  
  items:[],
  totalAmount:0,
    addItem:(item) => {},
    removeItem:(id) => {},
    onOpen: () => {},
    onClose: () => {},
 
});

export default OrdersContext;