import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Navbar} from './components/Navbar/Navbar';
import {Cards} from './components/Cards/Cards';
import './App.scss'
import {Footer} from './components/Footer/Footer';


function App() {

  return (
      <div className='App'>
        <Navbar />
        <ItemListContainer greeting={"Hola mundo"} />
        <Cards />
        <Footer />
      </div>
  );
}

export default App;
