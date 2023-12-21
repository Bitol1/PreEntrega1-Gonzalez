import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer message="¡Bienvenido al sitio de Vinilos!" />
  </div>
  );
};

export default App;
