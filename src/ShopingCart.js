import React from 'react';
import "./ShopingCart.css";
function ShopingCart(){
    return(
        <div className='checkout'>
        <div className='checkout_left'>
        <img src='/cardpagpic.PNG'/>
        <div>
            <h3>Hello Dear</h3>
            <h2 className='checkout_title'>Your shopping Basket</h2>
        <div className='checkout_Product' >
            <img src='mobiles/1.JPG' className='checkout_Product_img'/>
            <div className='checkout_Product_info'>
                <p className='checkout_Product_title'>Product Name</p>
                <p className='checkout_Product_price' >
                    <strong>$25.00-$2,000.00</strong>
                </p>
                <button>Remove from Basket</button>
            </div>
        </div>
        </div>
        </div>
        <div className='checkout_right'>
       <div className='subtotal'>
        <p>subtotal(2 items):<strong>$2,000.00</strong></p>
       <small className='subtotal_gift'>
        <input type="checkbox"/>This order contains a gift
       </small>
       </div>
       <button>Proceed to checkout</button>
        </div>
            
        </div>
    )
}
export default ShopingCart