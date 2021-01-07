import './styles.css';
import { ReactComponent as Logo } from './logo.svg'; /* A palavras "as" entre as chaves, quer dizer que está renomeando um nome para outro. Nesse caso, de 
ReactComponent para Logo, é preciso renomear para que no código fique visivel o que é cada elemento */
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link> 
        </nav> // Toda tag tag tem uma propriedade obrigatória que é o "to"(para onde será redirecionado)
/* Error: Invariant failed: You should not use <Link> outside a <Router> - quer dizer que só pode usar um componente "link" se estiver dentro do 
mecanismo de rotas */
    )
}

export default Navbar;