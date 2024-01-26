
import image from '../../../assets/carousel-1.png';  
const CartItem =(props)=>{
    const item=props.item;
    const handleRemoveItem=()=>{
       
        props.onDelete(item.id);
    }
    const handleMinusOne= ()=>{
        props.minusOne(item.id);
    }
    const handlePlusOne= ()=>{
        props.plusOne({...item,amount:1});
    }
    return (  
        <tr>
        <td data-th="Product">
            <div className="row">
                <div className="col-md-3 text-left">
                    <img src={image} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                </div>
                <div className="col-md-5 text-left mt-sm-2 text-center">
                    <h4>{item.name}</h4>
                    <p className="font-weight-light">Brand &amp; Name</p>
                </div>
            </div>
        </td>
        <td data-th="Price" className="text-left">${item.price}</td>
        <td data-th="Quantity" className='col-md-3'> 
      
        
        <div className="row">
        <div className="col-sm-8 mx-auto">
            <div className="input-group">
                <span className="input-group-prepend">
                    <button type="button" className="btn btn-outline-secondary btn-number" onClick={handleMinusOne}   data-type="minus" data-field="quant[1]">
                        <span className="fa fa-minus"></span>
                    </button>
                </span>
                <input type="text" name="quant[1]" className="form-control input-number" value={item.amount} min="1" max="10"></input>
                <span className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary btn-number" onClick={handlePlusOne} data-type="plus" data-field="quant[1]">
                        <span className="fa fa-plus"></span>
                    </button>
                </span>
            </div>
        </div>
    </div>
        </td>
        <td className="actions" data-th="">
            <div className="text-right">
             
                <button type='button' className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={handleRemoveItem}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </td>
    </tr>
    )
}

export default CartItem;