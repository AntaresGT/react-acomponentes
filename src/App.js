import './App.css';
import ACajaTexto from './AComponentes/ACajaTexto';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ACajaTexto
                    titulo={"Titulo"}
                />
                <button type='submit'>Subir</button>
            </header>
        </div>
    );
}

export default App;
