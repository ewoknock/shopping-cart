import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Cart = forwardRef(({cart, updateCart, toggleDialog}, dialogRef) => {
    const totalCoast = cart.reduce((total, item) => {
        return total + item.set.price * item.quantity
    }, 0)
    console.log(cart)

    const updateCartQuantity = (cartItem, quantity) => {
        if(cartItem.quantity + quantity < 1){
            alert("Remove")
        }else{
            const newCart = cart.map((item) => {
                if (item === cartItem){
                    return { set: item.set, quantity: item.quantity + quantity }
                }
                return item
            })
            updateCart(newCart)
        }
    }

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
                    const totalPrice = item.set.price * item.quantity

                    return(
                        <div className="cart-item" key={item.set.id}>
                            <img src={item.set.image} />
                            <div className="cart-item__header">
                                <h3>{item.set.name}</h3>
                                <h3>${totalPrice}</h3>
                            </div>
                            <div className="cart-item__quantity">
                                <button 
                                    className="btn btn__quantity"
                                    onClick={() => updateCartQuantity(item, -1)}>-</button>
                                    <span data-testid="qty-input">{item.quantity}</span>
                                <button 
                                className="btn btn__quantity"
                                onClick={() => updateCartQuantity(item, 1)}>+</button>
                            </div>
                        </div>
                    )
                })}
                <div className="cart__subtotal">
                    <div>Subtotal:</div>
                    <div>${totalCoast}</div>
                </div>
            </div>
        </dialog>

    )
})

Cart.propTypes = {
    cart: PropTypes.array,
    updateCart: PropTypes.func,
    toggleDialog: PropTypes.func,
};

Cart.displayName = "Cart"

export default Cart