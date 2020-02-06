import React from 'react';
import Header from './Header';
import Banner from './Banner';


import bgsobre from './assets/bg-sobre.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import './global.css';
import './Banner.css';
import './App.css';




function App() {
  return(
    <>

      <Header/>


      <Banner/>
      
      
      <div className="bg-sobre">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1>Sobre a <br/><span className="text-red">Cartola</span></h1>
            </div>

            <div className="col-12 col-md-6">
              <h3><strong>Cartola</strong> <i>(de quartola) - sf </i> Chapéu com copa alta, cilíndrica, usada por homens com <strong>trajes a rigor.</strong> sm indivíduo da alta sociedade: <strong>grã-fino.</strong></h3>
            </div>
          </div>
        </div>
      </div>

     
     
     
     
     
     

    </>
  )

}
  
  
  


export default App;
