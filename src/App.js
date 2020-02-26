import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';


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
import maria from './assets/maria.jpg'
import button from './assets/button.png'
import tag from './assets/tag.png'
import vistasuamarca from './assets/vista-sua-marca.png'
import avatar from './assets/avatar.png'





import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import './global.css';
import './Banner.css';
import './App.css';
import './Footer.css';




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

                <h6 className="text-bg-black-2"> <span classname="text-yellow">A Cartola</span> não apenas faz sua cabeça, ela também cuida de todo seu traje.</h6>

              </div>
              
              <div className="col-6 black-icon">
                <img src={servicos1} alt="" />
                <img src={servicos2} alt="" />
                <img src={servicos3} alt="" />
                <img src={servicos4} alt="" />
                
                <p classname="text-grid">Vestimos a sua marca</p>
                <p classname="text-grid">Estilizamos sua identidade visual</p>
                <p classname="text-grid">Modernizamos seu<br/> marketing</p>
                <p classname="text-grid">Agilizamos sua comunicação</p>

              </div>

            </div>
        </div>    
      </div>

      <div className="bg-pink">
        <div className="container flex">
          <div className="row">
            <div className="col-12 col-md-6">

              <div></div>
              
              <span className="text-icones icone-1"> Vestimos <br/>sua marca</span>
              <p>Criamos ou reformulamos o seu<br/> logotipo e toda a identidade visual da<br/> sua marca, para que toda sua<br/> comunicação esteja de acordo com seu o<br/> produto/serviço e posicionamento.</p>
            
            </div>
              
              
              
            <div className="col-12 col-md-6">

              <span className="text-icones icone-2">Realçamos suas<br/> peças publicitárias</span>
              <p>Em harmonia com sua identidade<br/> visual, criamos uma comunicação<br/> que aproxima, difunde e destaca<br/> sua marca e o seu<br/> produto/serviço.</p>
            
            </div>
              
              

            <div className="col-12 col-md-6">
              <span className="text-icones icone-3 ">Modernizamos<br/> seu marketing</span>
              <p>Elaboramos campanhas e ações que<br/> podem ser inseridas no marketing digital,<br/> sempre com a preocupação de manter um<br/> relacionamento próximo ao cliente e ao<br/> público alvo da sua marca.</p>
            </div>
              

            <div className="col-12 col-md-6">

              <span className="text-icones icone-4">Agilizamos sua<br/> comunicação</span>
              <p>Para uma comunicação ainda<br/> mais completa, oferecemos os<br/> serviços de assessoria de<br/> imprensa e elaboração de<br/> periódicos.</p>

            </div>
          </div>
        </div>    
      </div>

      <div className="bg-maria">
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img className="maria" src={maria} alt="" />
              </div>

              <div className="col-12 col-md-6">
                <img className="influenciadores" src={vistasuamarca} alt="" />
                <p>Influenciadores <strong>aumentam sua oportunidade</strong> de relacionamento<br/> e comunicam diretamente para o <strong>seu público.</strong></p>
                <a href="" className="button-influencer">Sou influencer</a>
                <a href="" className="button-sou-empresa"><p>Sou empresa</p></a>
                <a href="" className="button-midia-kit"> 
                  <p className="color-preciso">Preciso de um <span className="color-pink">midia-kit!</span></p></a>
              </div>
            </div>
        </div>    
      </div>

      <div className="bg-sou-influencer">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              
              <p> <span className="influencer">Sou influencer</span> <strong>Cadastre-se</strong> para participar de campanhas</p>

            </div>
          </div>

          <form action="" className="row">
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="nome-completo" id="nome-completo" placeholder="Nome completo" required />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="email" id="email" placeholder="E-mail" required />
              </div>
            </div>
          

          
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="DDD" id="DDD" placeholder="(DDD) 9XXXX-XXXX" required />
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="input-block rede-sociais">
                <input name="redes-sociais" id="redes-sociais" placeholder="redes sociais" required />
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="input-block">
                <input name="plataforma" id="plataforma" placeholder="plataforma" required />
              </div>
            </div>
          

          
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="link-kard" id="link-kard" placeholder="link kard Kuak.com" required />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="nichos" id="nichos" placeholder="Nichos # (separados por , )" required />
              </div>
            </div>
          

          
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="upload" id="upload" placeholder="fazer upload de midia kit em pdf" required />
              </div>
            </div>
        
            

            <div className="col-12 col-md-2">
              <img className="photo" src={avatar} alt="" />
            </div>

            <div className="col-12 col-md-4">
             
            <a href="" className="button-midia-kit"> 
                  Preciso de um <span className="color-pink">midia-kit!</span></a>

              <button className="button-default-2"> <img src={button} alt="" /></button>
            </div>

            <div className="col-12 col-md-6">
              <textarea name="" id="" cols="30" rows="10" placeholder="sobre mim"></textarea>
            </div>

            


          </form>
        </div>    
      </div>

      <div className="bg-sou-empresa">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              
             <span className="sou-empresa">Sou empresa</span> 

            </div>

            <div className="col-12 col-md-6">
              <p>Nos passe um <strong><i>Briefing</i></strong> sobre sua campanha para encontrarmos o melhor <strong>influenciador para sua marca!</strong></p>
            </div>
          </div>

          <form action="" className="row">
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="nome da empresa" id="nome da empresa" placeholder="Nome da empresa" required />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="input-block">
                <input name="nome do responsavel" id="nome do responsavel" placeholder="Nome do responsável" required />
              </div>
            </div>

            <div className="col-12 col-md-2">
              <div className="input-block">
                <input name="cargo" id="cargo" placeholder="cargo" required />
              </div>
            </div>
          </form>

          <form action="" className="row">
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="DDD" id="DDD" placeholder="(DDD) 9XXXX-XXXX" required />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="email" id="email" placeholder="e-mail" required />
              </div>
            </div>
          </form>

          <form action="" className="row">
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="tipo de campanha" id="tipo de campanha" placeholder="tipo de campanha" required />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="objetivo da campanha" id="objetivo da campanha" placeholder="objetivo da campanha" required />
              </div>
            </div>
          </form>

          <form action="" className="row">
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="persona da campanha" id="persona da campanha" placeholder="persona da campanha" required />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="nichos" id="nichos" placeholder="nichos # (separados por ,)" required />
              </div>
            </div>
          </form>

          <form action="" className="row">
          <div className="col-12 col-md-3">
              <div className="input-block">
                <input name="gênero" id="gênero" placeholder="gênero" required />
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="input-block">
                <input name="duração" id="duração" placeholder="duração" required />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="localização" id="localização" placeholder="localização" required />
              </div>
            </div>
          </form>

          <form action="" className="row">
            <div className="col-12 col-md-6">
              <div className="input-block">
                <input name="verba $" id="verba $" placeholder="verba $" required />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <button className="button-default"> <img src={button} alt="" /></button>
            </div>
          </form>
        </div>
      </div>

    </>
  )

}
  

  


export default App;
