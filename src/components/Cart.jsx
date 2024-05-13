import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Cart = forwardRef(({cart, toggleDialog}, dialogRef) => {
    console.log(cart)
    return (
        <dialog 
            ref={dialogRef} 
            className="cart" 
            id="cartDialog"
            onClick={(e) => {
                if(e.currentTarget === e.target){
                toggleDialog();
                }
            }}>
            <div className="cart__content">
                <div className="cart__header">
                    <h2>Your Cart</h2>
                    <button className="btn btn__close" onClick={toggleDialog}>X</button>
                </div>
                {cart.map((item) => {
                    return(
                        <div className="cart__item__cart" key={item.set.id}>
                            <h3>{item.set.name}</h3>
                        </div>
                    )
                })}
            </div>
        </dialog>

    )
})

Cart.propTypes = {
    cart: PropTypes.array,
    toggleDialog: PropTypes.func,
};

Cart.displayName = "Cart"

export default Cart