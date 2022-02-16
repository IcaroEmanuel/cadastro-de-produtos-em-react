import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" element={ <Cadastro/> } />
        <Route exact path="/listagem" element={ <Listagem/> } />
      </Routes>
    </div>
  );
}

// Usei react router para trabalhar com rotas: https://reactrouter.com/

export default App;
