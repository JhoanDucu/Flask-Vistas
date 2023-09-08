import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Api from './pages/api'
import Maps from './pages/maps'


function App() {
  return <>
  <Nav/>{/*TODAS LAS PAGINAS TENDRAN EL NAVEGADOR*/}
  <Routes>
    <Route path='/' element={ <Home/> } />
    <Route path='/api' element={ <Api/> } />
    <Route path='/maps' element={ <Maps/> } />
  </Routes>
  </>
}

export default App;
