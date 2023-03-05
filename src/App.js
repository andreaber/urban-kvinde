import logo from './logo.svg';
import './App.css';
// import saludar from './Utils.js'
// import { saludar } from './Utils.js'
// import { saludar, chau } from './Utils.js'

function App() {

  // saludar()
  // chau()

  const prof = "Mauro Paul"

  // const mensaje = `El profesor es ${prof}`

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Alumna: Andrea Berardi (the best) */}
          {/* {prof} */}
          {/* {mensaje} */}
          El profesor es {prof}
        </p>
        <h2>Coderhouse inc.</h2>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a> */}
      </header>


    </div>
  );

}

export default App;
