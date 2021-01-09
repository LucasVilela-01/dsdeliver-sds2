import './App.css';
import Routes from './Routes';
// import Hello from './Hello'; // Importando o componente "Hello", from dizer entre '' qual o diretório, como está no mesmo diretório, usa-se ./
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 // return <Hello message="Lucas"/>; // Mostrando o componente "Hello"
    return (
      /* React fragment
      <>
        <Navbar />
        <Routes />
      </>*/
      <>
        <Routes />
        <ToastContainer />
      </>
    );
}

export default App;