import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Usuarios, ListaDeUsuarios} from "./pages/Usuarios";
import {
  Ocorrencias,
  mapaDeOcorrencias,
  listaDeOcorrencias,
  relatorios,
} from "./pages/Ocorrencias";
import { TiposSubtipos, listagemTipos} from "./pages/TiposeSubtipos";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/usuarios" exact element={Usuarios} />
        <Route path="/usuarios/listaDeUsuarios" exact element={ListaDeUsuarios} />
        <Route path="/ocorrencias" exact element={Ocorrencias} />
        <Route path="/ocorrencias/mapaDeOcorrencias" exact element={mapaDeOcorrencias} />
        <Route path="/ocorrencias/listaDeOcorrencias" exact element={listaDeOcorrencias} />
        <Route path="/ocorrencias/relatorios" exact element={relatorios} />
        <Route path="/tipos-subtipos" exact element={TiposSubtipos} />
        <Route path="/tipos-subtipos/listagemTipos" exact element={listagemTipos} />
      </Routes>
    </Router>
  );
}
  
export default App;