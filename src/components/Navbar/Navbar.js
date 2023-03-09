import './Navbar.scss'
import logo from './logo-uk.png'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo' />

                <nav className="navbar">
                    <p className="navbar__link">Collections</p>
                    <p className="navbar__link">About</p>
                    <p className="navbar__link">Contact</p>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}