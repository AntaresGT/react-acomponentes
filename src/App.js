import logo from './logo.svg';
import './App.css';
import ACajaTexto from './AComponentes/ACajaTexto';
import { FiEdit } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ACajaTexto
          titulo={"Titulo"}
          icono={<FiEdit size={20} color={"black"} />}
        />
      </header>
    </div>
  );
}

export default App;
