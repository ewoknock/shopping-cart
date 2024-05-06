import { useState } from "react"

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
            <p>{set.name}</p>
            <p>${set.price}</p>
            <div className="set__actions">
                <div className="set__qty">
                    <button 
                        className="btn btn__quantity"
                        onClick={() => updateQuantity(quantity - 1)}>-</button>
                        <span>{quantity}</span>
                    <button 
                    className="btn btn__quantity"
                    onClick={() => updateQuantity(quantity + 1)}>+</button>
                </div>
                <button className="btn btn__add">Add to Cart</button>
            </div>
        </div>
    )
}

export default Set