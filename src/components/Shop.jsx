import SetList from "../helpers/SetList";
import Set from "./Set.jsx"

function Shop(){
    const sets = SetList

    return (
        <section className="shop">
            {sets.map((set) => {
                return(
                    <Set 
                        set={set}
                        key={set.id}
                    />
                )
            })}
        </section>
    )
}

export default Shop