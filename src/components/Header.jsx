import { Link } from 'react-router-dom'

function Header(){
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">STAR WARS</Link>
                </div>
                <nav className="header__nav">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
                <div className="header__cart">
                    <Link to="/cart">Cart</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
