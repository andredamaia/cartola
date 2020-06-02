import React from 'react';

import { Routes, Route} from 'react-router-dom';

import Header from './Header';

import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Chf from './pages/Chf';

import Influencer from './pages/Influencer';
import Empresa from './pages/Empresa';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import './global.css';
import './Banner.css';
import './App.css';
import './Footer.css';
import './responsivo.css';

function App() {
  return(
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="influencer" element={<Influencer />} />
          <Route path="empresa" element={<Empresa />} />
        </Route>
        <Route path="/clientes" element={<Clientes />}>
          <Route path="chf" element={<Chf />} />
        </Route>
      </Routes>
    </>
  )

}
  
export default App;
