import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Cart = forwardRef(({cart, updateCart, toggleDialog}, dialogRef) => {
    const totalCoast = cart.reduce((total, item) => {
        return total + item.set.price * item.quantity
    }, 0)
    console.log(cart)

    const removeFromCart = (cartItem) => {
        const newCart = cart.filter((item) => item !== cartItem)
        updateCart(newCart)
    }

    const updateCartQuantity = (cartItem, quantity) => {
        if(cartItem.quantity + quantity < 1){
            const confirmRemove = confirm('Remove Item?')
            confirmRemove ? removeFromCart(cartItem) : ''
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

    const placeOrder = () => {
        alert('Thank you for shopping with us!')   
        resetCart()
    }

    const resetCart = () => {
        updateCart([])
        toggleDialog()
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
                            <div className="cart-item__content">
                                <div className="cart-item__header">
                                    <h3>{item.set.name}</h3>
                                    <h3>${totalPrice}</h3>
                                </div>
                                <div className="cart-item__action">
                                    <div className="cart-item__quantity">
                                        <button 
                                            className="btn btn__quantity"
                                            onClick={() => updateCartQuantity(item, -1)}>-</button>
                                            <span data-testid="qty-input">{item.quantity}</span>
                                        <button 
                                        className="btn btn__quantity"
                                        onClick={() => updateCartQuantity(item, 1)}>+</button>
                                    </div>
                                    <button className="btn btn__cart-remove" onClick={() => removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="cart__subtotal">
                    <div>Subtotal:</div>
                    <div>${totalCoast}</div>
                </div>
                <button className="btn btn__place-order" onClick={placeOrder}>Place Order</button>
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