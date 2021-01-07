import './styles.css';
import { ReactComponent as Logo } from './logo.svg'; /* A palavras "as" entre as chaves, quer dizer que está renomeando um nome para outro. Nesse caso, de 
ReactComponent para Logo, é preciso renomear para que no código fique visivel o que é cada elemento */

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;