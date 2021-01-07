import './App.css';
import Routes from './Routes';
// import Hello from './Hello'; // Importando o componente "Hello", from dizer entre '' qual o diretório, como está no mesmo diretório, usa-se ./


function App() {
 // return <Hello message="Lucas"/>; // Mostrando o componente "Hello"
    return (
      /* React fragment
      <>
        <Navbar />
        <Routes />
      </>*/
      <Routes />
    );
}

export default App;
