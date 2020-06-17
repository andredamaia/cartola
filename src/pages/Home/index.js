import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Banner from '../../Banner';
import Footer from '../../Footer';
// import { Container } from './styles';

import casageraldo from '../../assets/casa-geraldo.jpg';
import bgCartola from '../../assets/bg-cartola.jpg';
import importante from '../../assets/importante.jpg'
import solid from '../../assets/solid.jpg'
import bentec from '../../assets/bentec.jpg'
import adoremus from '../../assets/adoremus.jpg'
import grupoazarte from '../../assets/grupo-azarte.jpg'
import happytour from '../../assets/happy-tour.jpg'
import mhg from '../../assets/mhg.jpg'
import lenasouza from '../../assets/lena-souza.jpg'
import servicos1 from '../../assets/servicos-1.png'
import servicos2 from '../../assets/servicos-2.png'
import servicos3 from '../../assets/servicos-3.png'
import servicos4 from '../../assets/servicos-4.png'
import maria from '../../assets/maria.jpg'
import vistasuamarca from '../../assets/vista-sua-marca.png'
import pedraskraisch from '../../assets/pedras-kraisch.png'
import chf from '../../assets/logo-chf.png'
import marlene from '../../assets/marlene.png'
import forcess from '../../assets/forcess.png'
import drvinicius from '../../assets/dr-vinicius.png'
import gruporhino from '../../assets/grupo-rhino.png'
import urbanii from '../../assets/urbanii.png'
import livanto from '../../assets/livanto.png'
import santolau from '../../assets/santo-lau.png'
import draana from '../../assets/dra-ana.png'
import isoplast from '../../assets/isoplast.png'
import pietra from '../../assets/pietra.png'
import bgchf from '../../assets/bg-chf.jpg'
import bgmarlene from '../../assets/bg-marlene.jpg'
import bgforcess from '../../assets/bg-forcess.jpg'
import bgdrvinicius from '../../assets/bg-dr-vinicius.jpg'
import bggruporhino from '../../assets/bg-grupo-rhino.jpg'
import bgurbanii from '../../assets/bg-urbanii.jpg'
import bglivanto from '../../assets/bg-livanto.jpg'
import bgsantolau from '../../assets/bg-santo-lau.jpg'
import bgdraana from '../../assets/bg-dra-ana.jpg'
import bgisoplast from '../../assets/bg-isoplast.jpg'
import bgpietra from '../../assets/bg-pietra.jpg'
import bgpedras from '../../assets/bg-pedras.jpg'
import bglevpao from '../../assets/bg-lev-pao.jpg'
import levpao from '../../assets/lev-pao.png'
import goedert from '../../assets/goedert.png'
import tarja from '../../assets/tarja.jpg'

import outdoor from '../../assets/outdoor.png'
import cartao from '../../assets/cartao.png'
import revista from '../../assets/revista.png'
import flyers from '../../assets/flyers.png'
import computador from '../../assets/computador.png'
import camisetas from '../../assets/camisetas.png'
import nuvemdireita from '../../assets/nuvem-direita.png'
import nuvemesquerda from '../../assets/nuvem-esquerda.png'



function Home() {
  return (
    <>
        <Banner/>

        <div className="bg-sobre">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <h1>Por que <br/><span className="text-red">Cartola?</span></h1>
                            </div>

                            <div className="col-12 col-md-7">
                                <h3>Sabe aquele indivíduo que nas décadas 20 e 30 usava trajes diferenciados e se destacava na multidão, por ser mais distinto, ousado e intelectual? Então, ele vestia uma cartola. <br/> Vem vestir <strong>a Cartola</strong>  e se destacar também.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="deixe-a-cartola">

        <img className="img-direita" src={nuvemdireita} alt="" />
        <img className="img-esquerda" src={nuvemesquerda} alt="" />

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
                <div className="box">
                    <img className="img-background" src={bgpedras} alt="" />
                    <img className="img-logo" src={pedraskraisch} alt="" />
                </div>

                <div className="box">
                    <Link to="/clientes/chf">
                        <img className="img-background" src={bgchf} alt="" />
                        <img className="img-logo" src={chf} alt="" />
                    </Link>
                </div>

                <div className="box">
                    <img className="img-background" src={bgmarlene} alt="" />
                    <img className="img-logo" src={marlene} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bgforcess} alt="" />
                    <img className="img-logo" src={forcess} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bgdrvinicius} alt="" />
                    <img className="img-logo" src={drvinicius} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bglevpao} alt="" />
                    <img className="img-logo" src={levpao} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bgurbanii} alt="" />
                    <img className="img-logo" src={urbanii} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bglivanto} alt="" />
                    <img className="img-logo" src={livanto} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bgsantolau} alt="" />
                    <img className="img-logo" src={santolau} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bgdraana} alt="" />
                    <img className="img-logo" src={draana} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bgisoplast} alt="" />
                    <img className="img-logo" src={isoplast} alt="" />
                </div>

                <div className="box">
                    <img className="img-background" src={bgpietra} alt="" />
                    <img className="img-logo" src={pietra} alt="" />
                </div>
                
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
                        <div><img src={goedert} alt="" /></div>
                        <div><img src={casageraldo} alt="" /></div>
                        <div><img src={gruporhino} alt="" /></div>
                        <div><img src={happytour} alt="" /></div>
                        <div><img src={mhg} alt="" /></div>
                        <div><img src={lenasouza} alt="" /></div>
                        <div><img src={grupoazarte} alt="" /></div>
                        <div><img src={adoremus} alt="" /></div>
                    </div>
                </div>
            </div>    
        </div>

        <div className="bg-yellow">
            <img src={bgCartola} alt="" style={{ maxWidth: '100%' }} /> 
        </div>

        <div className="white-end">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={importante} alt="" />
                    </div>

                    <div className="col-12 col-md-6">
                        <h4>Mais do que cuidar e padronizar a imagem da sua empresa, <strong>a Cartola</strong> veste seu negócio com resultado positivo e o <strong>destaca</strong> no meio da multidão de marcas que existem <i>em seu mercado.</i></h4>
                    </div>
                </div>
            </div>    
        </div>

        <div className="bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 ">
                        <p className="text-bg-black-1">Diversos serviços voltados para <strong>marketing </strong> (<i>offline e digital</i>) e <strong>jornalismo</strong>, desde o estudo aprofundado da empresa <strong>até a comunicação final</strong>, sempre apresentando as <strong> melhores soluções</strong> para tornar sua marca referência no mercado. </p>

                        <h6 className="text-bg-black-2"> <span className="text-yellow">A Cartola</span> não apenas faz sua cabeça, ela também cuida de todo seu traje.</h6>

                    </div>
                    
                    <div className="col-12 col-md-6 ">
                        <div className="black-icon">
                            <div>
                                <img src={servicos1} alt="" />
                                <p classname="text-grid">Vestimos a sua marca</p>
                            </div>
                        
                            <div>
                                <img src={servicos2} alt="" />
                                <p classname="text-grid">Estilizamos sua identidade visual</p>
                            </div>

                            <div>
                                <img src={servicos3} alt="" />
                                <p classname="text-grid">Modernizamos seu<br/> marketing</p>
                            </div>

                            <div>
                                <img src={servicos4} alt="" />
                                <p classname="text-grid">Agilizamos sua comunicação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>

        <div className="bg-pink">
            
            <img className="outdoor" src={outdoor} alt="" />
            <img className="cartao" src={cartao} alt="" />
            <img className="revista" src={revista} alt="" />
            <img className="flyers" src={flyers} alt="" />
            <img className="computador" src={computador} alt="" />
            <img className="camisetas" src={camisetas} alt="" />

            <div className="container flex">
            <div className="row">
                <div className="col-12 col-md-6">

                <div></div>
                
                <span className="text-icones icone-1"> Vestimos <br/>sua marca</span>
                <p>Criamos ou reformulamos o seu logotipo e toda a identidade visual da sua marca, para que toda sua comunicação esteja de acordo com seu o produto/serviço e posicionamento.</p>
                
                </div>
                
                
                
                <div className="col-12 col-md-6">

                <span className="text-icones icone-2">Realçamos suas <br/> peças publicitárias</span>
                <p>Em harmonia com sua identidade visual, criamos uma comunicação que aproxima, difunde e destaca sua marca e o seu produto/serviço.</p>
                
                </div>
                
                

                <div className="col-12 col-md-6">
                <span className="text-icones icone-3 ">Modernizamos<br/> seu marketing</span>
                <p>Elaboramos campanhas e ações que podem ser inseridas no marketing digital, sempre com a preocupação de manter um relacionamento próximo ao cliente e ao público alvo da sua marca.</p>
                </div>
                

                <div className="col-12 col-md-6">

                <span className="text-icones icone-4">Agilizamos sua<br/> comunicação</span>
                <p>Para uma comunicação ainda mais completa, oferecemos os serviços de assessoria de imprensa e elaboração de periódicos.</p>

                </div>
            </div>
            </div>    
        </div>

        <div className="bg-maria">

            <a href="#"> <img className="tarja" src={tarja} alt="" /></a>
            
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6">
                    <img className="maria" src={maria} alt="" />
                </div>

                <div className="col-12 col-md-6 text-center">
                    <img className="influenciadores" src={vistasuamarca} alt="" />

                    <p>Influenciadores <strong>aumentam sua oportunidade</strong> de relacionamento e comunicam diretamente para o <strong>seu público.</strong></p>

                    <Link to="/influencer" className="button-influencer">Sou influencer</Link>
                    <Link to="/empresa" className="button-sou-empresa">Sou empresa</Link>
                    
                    <a href="#" className="button-midia-kit"> 
                        Preciso de um <span className="color-pink">midia-kit!</span>
                    </a>
                </div>
                </div>
            </div>    
        </div>

        <Outlet />

        <Footer/>
    </>
  );
}

export default Home;