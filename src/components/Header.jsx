import { Link } from 'react-router-dom'

function Header({ toggleDialog }){
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">STAR WARS</Link>
                </div>
                <nav className="header__nav">
                    <Link to="/shopping-cart/">Home</Link>
                    <Link to="/shopping-cart/shop">Shop</Link>
                </nav>
                <div className="header__cart">
                    <button className="btn btn__cart" onClick={toggleDialog} to="/cart">Cart</button>
                </div>
            </div>
        </header>
    )
}

export default Header
