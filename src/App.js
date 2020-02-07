import React from 'react';
import Header from './Header';
import Banner from './Banner';


import bgsobre from './assets/bg-sobre.png';
import deixeacartola from './assets/deixe-a-cartola.jpg';
import casageraldo from './assets/casa-geraldo.jpg';
import servicos from './assets/servicos.png';


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

      <div className="deixe-a-cartola">
        <div className="container">
            <div className="row">
              <div className="col-12"></div>
            </div>
        </div>    
      </div>

      <div className="portifolio">
        <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-portifolio">Portfólio</h2>

                <p className="text-black"><strong>A Cartola</strong> já vestiu várias empresas de <i>Joinville e região.</i> Redesenhamos marcas com reformulação de identidade visual, reinventamos sites e cuidamos da comunicação e materiais gráficos sob o olhar exigente de quem usa o Cartola.</p>

                <div className="clients-holder">
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                  <div><img src={casageraldo} alt="" /></div>
                </div>
              </div>
            </div>
        </div>    
      </div>

      <div className="bg-white">
        <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="bg-white-text">Mais clientes de <strong>Cartola</strong> </p>
              </div>
            </div>
        </div>    
      </div>

      <div className="bg-yellow">
        <div className="container">
            <div className="row">
              <div className="col-12">
                <img src={servicos} alt="" />
              </div>
            </div>
        </div>    
      </div>


    </>
  )

}
  
  
  


export default App;
