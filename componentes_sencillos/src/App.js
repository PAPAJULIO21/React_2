import './App.css';
import Formulario from "./Componentes/Formulario.js";
import ListaTareas from "./Componentes/ListaTareas.js";
import Contador from "./Componentes/Contador.js";
import Toogle from "./Componentes/Toggle.js";
import BuscadorDeProductos from './Componentes/BuscadorDeProductos.js';

function App() {
    return(
        <div>
            <Formulario/>
            <ListaTareas/>
            <Contador/>
            <Toogle/>
            <BuscadorDeProductos/>
        </div>
    )
}

export default App;