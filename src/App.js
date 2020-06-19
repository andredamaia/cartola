import React from 'react';

import { Routes, Route} from 'react-router-dom';

import Header from './Header';

import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Chf from './pages/Chf';
import Pedraskraisch from './pages/Pedraskraisch';
import Marlene from './pages/Marlene';
import Drvinicius from './pages/Drvinicius';
import Levpao from './pages/Levpao';
import Draana from './pages/Draana';
import Isoplast from './pages/Isoplast';
import Madequimica from './pages/Madequimica';
import Mhg from './pages/Mhg';
import Aguiaconsultoria from './pages/Aguiaconsultoria';
import Adoremus from './pages/Adoremus';
import Goedert from './pages/Goedert';



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
          <Route path="pedraskraisch" element={<Pedraskraisch />} />
          <Route path="marlene" element={<Marlene />} />
          <Route path="drvinicius" element={<Drvinicius />} />
          <Route path="levpao" element={<Levpao />} />
          <Route path="draana" element={<Draana />} />
          <Route path="isoplast" element={<Isoplast />} />
          <Route path="madequimica" element={<Madequimica />} />
          <Route path="mhg" element={<Mhg />} />
          <Route path="aguiaconsultoria" element={<Aguiaconsultoria />} />
          <Route path="adoremus" element={<Adoremus />} />
          <Route path="goedert" element={<Goedert />} />
        </Route>
      </Routes>
    </>
  )

}
  
export default App;
