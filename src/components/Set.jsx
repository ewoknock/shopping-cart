import { useState } from "react"
import PropTypes from 'prop-types';

function Set({ set, cart, updateCart }){
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (qty) => {
        if (qty > 0){
            setQuantity(qty)
        } else{
            qty = 1
        }
    }

    const addToCart = (set, quantity) => {
        const setInCart = cart.find((item) => item.set === set)
        console.log(setInCart)
        if(setInCart){
            const newCart = cart.map((item) => {
                if(item.set === set){
                    return { set: item.set, quantity: item.quantity + quantity }
                }
                return item
            })
            updateCart(newCart)
        }else{
            const newCart = [...cart, {set: set, quantity: quantity}];
            updateCart(newCart)
        }
    }

    return (
        <div className="set" data-testid="set">
            <div className="set__image">
                <img src={set.image} alt={set.name} />
            </div>
            <h2 aria-label="set-name">{set.name}</h2>
            <p aria-label="price">${set.price}</p>
            <div className="set__actions">
                <div className="set__qty">
                    <button 
                        className="btn btn__quantity"
                        onClick={() => updateQuantity(quantity - 1)}>-</button>
                        <span data-testid="qty-input">{quantity}</span>
                    <button 
                    className="btn btn__quantity"
                    onClick={() => updateQuantity(quantity + 1)}>+</button>
                </div>
                <button className="btn btn__add" onClick={() => addToCart(set, quantity)}>Add to Cart</button>
            </div>
        </div>
    )
}


Set.propTypes = {
    set: PropTypes.object,
    cart: PropTypes.array,
    updateCart: PropTypes.func,
}

export default Set