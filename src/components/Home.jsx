import Hero from "../assets/star-wars-hero.webp"
import { Link } from "react-router-dom"

function Home(){
    return (
        <section className="home">
            <img src={Hero} />
            <div className="home__text">
                <h1>Lego Star Wars Ultimate Collection</h1>
                <Link to="/shopping-cart/shop">
                    <button className="btn btn__shop">Sets</button>
                </Link>
            </div>
        </section>
    )
}

export default Home