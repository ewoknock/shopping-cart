import { useOutletContext } from "react-router-dom";
import SetList from "../helpers/SetList";
import Set from "./Set.jsx"

function Shop(){
    const [cart, setCart] = useOutletContext();
    const sets = SetList

    return (
        <section className="shop">
            {sets.map((set) => {
                return(
                    <Set 
                        set={set}
                        key={set.id}
                        cart={cart}
                        updateCart={(newCart) => setCart(newCart)}
                    />
                )
            })}
        </section>
    )
}

export default Shop