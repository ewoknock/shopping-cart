import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Cart = forwardRef(({children, toggleDialog}, dialogRef) => {
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
            <div className="cart-content">
                <div className="cart__header">
                    <h2>Your Cart</h2>
                    <button className="btn btn__close" onClick={toggleDialog}>X</button>
                </div>
            </div>
        </dialog>

    )
})

Cart.propTypes = {
    children: PropTypes.array,
    toggleDialog: PropTypes.func,
};

Cart.displayName = "Cart"

export default Cart