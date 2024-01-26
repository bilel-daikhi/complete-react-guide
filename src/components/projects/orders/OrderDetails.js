 
 
import { useContext } from 'react'; 
import Modal from "./Modal";  
import OrdersContext from '../../../store/orders-context';
import CartItem from './CartItem';
const OrderDetails =(props)=>{
    const orderContex =useContext(OrdersContext);
 
    const onClose=()=>{
        props.onClose();
    }
const handleRemoveItem=(id)=>{ 
    orderContex.removeItem(id)
}
const HandlePlusOne=(item)=>{
    orderContex.addItem(item)
}
const HandleMinusOne=(item)=>{
    orderContex.removeItem(item)
}
    return ( 
<Modal onClose={onClose}>
<section className="pt-5 pb-5">
  <div className="container">
    <div className="row w-100">
        <div className="col-lg-12 col-md-12 col-12">
            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
                <i className="text-info font-weight-bold">{orderContex.items.length}</i> items in your cart</p>
            <table id="shoppingCart" className="table table-condensed table-responsive">
                <thead>
                    <tr>
                        <th  style={{width: '60%'}}>Course</th>
                        
                        <th style={{width: '12%'}}>Price</th>
                        <th style={{width: '10%'}}>Quantity</th>
                        <th style={{width: '16%'}}></th>
                    </tr>
                </thead>
                <tbody>
                    {orderContex.items.map((value)=>{return (
                        <CartItem key={value.id} item={value} onDelete={handleRemoveItem} plusOne={HandlePlusOne} minusOne={HandleMinusOne}/>
                    )})}
                  
                </tbody>
            </table>
            <div className="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>${orderContex.totalAmount.toFixed(2)}</h1>
            </div>
        </div>
    </div>
 
    <div style={{marginTop:'15px'}} className='float-right text-right mg-4'>  
                        <button type="button" className="btn btn-danger mr-1" onClick={onClose}>Cancel</button>  
                        <button type="button" className="btn btn-primary ">Checkout</button>  
                    </div>  
    
</div>
</section>

</Modal>)
  
};

export default OrderDetails;