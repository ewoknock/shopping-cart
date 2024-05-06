import { useState } from "react"
import PropTypes from 'prop-types';

function Set({ set }){
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (qty) => {
        if (qty > 0){
            setQuantity(qty)
        } else{
            qty = 1
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
                <button className="btn btn__add">Add to Cart</button>
            </div>
        </div>
    )
}


Set.propTypes = {
    set: PropTypes.Object,
};

export default Set