import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Header() {
    const location = useLocation()
    return (
        <header>
            <img src={logo} alt="Logo Kasa" />
            <nav>
                <Link className={`${location.pathname === '/' ? 'active' : ''}`} to="/">Accueil</Link>
                <Link className={`${location.pathname === '/about' ? 'active' : ''}`} to="/about">À propos</Link>
            </nav>
        </header>
    );
}

export default Header;