import { Noticias } from './components/Noticias'
import { Tutores } from './components/Tutores'
import { Tutor } from "./components/Tutor";
import './App.css'
import { ContenedorTurquesa } from './components/ContenedorTurquesa';
import { Boton } from './components/Boton'

function App() {

  return (
    <div>

      {/* <NavBar />
      <ItemListContainer greeting="Hola mundo" /> */}


      <hr />

      <h2>Coder 51155</h2>


      <Noticias>
        <h4>Noticias</h4>
      </Noticias>

      <Tutores />

      <ContenedorTurquesa>
        <h2>Título</h2>
        <p>Blablabla jjbjhj</p>
        <small>Un tetxto chiquito</small>

        <section>
          <h4>Otro título más chiquito</h4>
          <p>Otro texto</p>
        </section>

      </ContenedorTurquesa>

      <Boton>
        Click me

      </Boton>


      <Tutor
        comision={51155}
        nombre="Fede Blautzik"
        curso="ReactJS"
        edad={28}
      />

      <Tutor
        comision={42355}
        nombre="Julián Debranbandere"
        curso="JavaScript"
        edad={19}
      />

    </div>
  );

}

export default App;
