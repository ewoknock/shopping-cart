
function Set({ set }){
    return (
        <div className="set">
            <div className="set__image">
                <img src={set.image} alt={set.name} />
            </div>
            <p>{set.name}</p>
            <p>${set.price}</p>
            <div className="set__actions">
                <button className="btn btn__quantity">Quantity</button>
                <button className="btn btn__add">Add to Cart</button>
            </div>
        </div>
    )
}

export default Set