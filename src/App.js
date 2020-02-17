import React from 'react';
import Header from './Header';
import Banner from './Banner';


import bgsobre from './assets/bg-sobre.png';
import deixeacartola from './assets/deixe-a-cartola.jpg';
import casageraldo from './assets/casa-geraldo.jpg';
import servicos from './assets/servicos.png';
import importante from './assets/importante.jpg'
import solid from './assets/solid.jpg'
import bentec from './assets/bentec.jpg'
import adoremus from './assets/adoremus.jpg'
import grupoazarte from './assets/grupo-azarte.jpg'
import happytour from './assets/happy-tour.jpg'
import mhg from './assets/mhg.jpg'
import lenasouza from './assets/lena-souza.jpg'
import bgservicos1 from './assets/bg-servicos1.jpg'
import servicos1 from './assets/servicos-1.png'
import servicos2 from './assets/servicos-2.png'
import servicos3 from './assets/servicos-3.png'
import servicos4 from './assets/servicos-4.png'
import bgservicos2 from './assets/bg-servicos-2.jpg'




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
              <h3><strong>Cartola</strong> <i>(de quartola) - sf </i> Chapéu com copa <br/> alta, cilíndrica, usada por homens com <strong>trajes a <br/> rigor.</strong> sm indivíduo da alta sociedade: <strong>grã-fino.</strong></h3>
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

              </div>
            </div>
        </div> 

        <div className="clients-holder">
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
          <div className="box"><img src={casageraldo} alt="" /></div>
        </div>   
      </div>

      <div className="bg-white">
        <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="bg-white-text">Mais clientes de <strong>Cartola</strong> </p>
              </div>

              <div className="empresas">
                <div><img src={solid} alt="" /></div>
                <div><img src={bentec} alt="" /></div>
                <div><img src={adoremus} alt="" /></div>
                <div><img src={casageraldo} alt="" /></div>
                <div><img src={grupoazarte} alt="" /></div>
                <div><img src={happytour} alt="" /></div>
                <div><img src={mhg} alt="" /></div>
                <div><img src={lenasouza} alt="" /></div>
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

      <div className="white-end">
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img src={importante} alt="" />
              </div>

              <div className="col-12 col-md-6">
                <h4>Mais do que cuidar e padronizar a <br/> imagem da sua empresa, <strong>a Cartola</strong> veste <br/> seu negócio com resultado positivo e o <br/> <strong>destaca</strong> no meio da multidão de marcas <br/> que existem <i>em seu mercado.</i></h4>
              </div>
            </div>
        </div>    
      </div>

      <div className="bg-black">
        <div className="container">
            <div className="row">
              <div className="col-6 ">
                <p className="text-bg-black-1">Diversos serviços voltados para <strong>marketing </strong> (<i>offline e digital</i>) e <strong>jornalismo</strong>, desde o estudo aprofundado da empresa <strong>até a comunicação final</strong>, sempre apresentando as <strong> melhores soluções</strong> para tornar sua marca referência no mercado. </p>

                <p className="text-bg-black-2"> <span classname="text-yellow">A Cartola</span> não apenas faz sua cabeça, ela também cuida de todo seu traje.</p>

              </div>
              
              <div className="col-6 black-icon">
                <img src={servicos1} alt="" />
                <img src={servicos2} alt="" />
                <img src={servicos3} alt="" />
                <img src={servicos4} alt="" />
                
                <p>Vestimos a sua marca</p>
                <p>Estilizamos sua identidade visual</p>
                <p>Modernizamos seu marketing</p>
                <p>Agilizamos sua comunicação</p>

              </div>

            </div>
        </div>    
      </div>

      <div className="bg-pink">
        <div className="container flex">
          <div className="row">
            <div className="col-12 col-md-6">

              <div className="icone-1"></div>
              
              <span className="text-icones"> Vestimos <br/>sua marca</span>
              <p>Criamos ou reformulamos o seu<br/> logotipo e toda a identidade visual da<br/> sua marca, para que toda sua<br/> comunicação esteja de acordo com seu o<br/> produto/serviço e posicionamento.</p>
            
            </div>
              
              
              
            <div className="col-12 col-md-6 icone-2">

              <span className="text-icones">Realçamos suas<br/> peças publicitárias</span>
              <p>Em harmonia com sua identidade<br/> visual, criamos uma comunicação<br/> que aproxima, difunde e destaca<br/> sua marca e o seu<br/> produto/serviço.</p>
            
            </div>
              
              

            <div className="col-12 col-md-6 icone-3">
              <span className="text-icones ">Modernizamos<br/> seu marketing</span>
              <p>Elaboramos campanhas e ações que<br/> podem ser inseridas no marketing digital,<br/> sempre com a preocupação de manter um<br/> relacionamento próximo ao cliente e ao<br/> público alvo da sua marca.</p>

            </div>
              

            <div className="col-12 col-md-6 icone-4">

              <span className="text-icones">Agilizamos sua<br/> comunicação</span>
              <p>Para uma comunicação ainda<br/> mais completa, oferecemos os<br/> serviços de assessoria de<br/> imprensa e elaboração de periódicos.</p>

            </div>
              

            
          </div>
        </div>    
      </div>


    </>
  )

}
  
  
  


export default App;
