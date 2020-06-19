import React from 'react';

import { Container } from './styles';

import levpao from '../../assets/lev-pao.png';
import levpaoweb from '../../assets/levpao-web.png';
import levpaoflyers from '../../assets/levpao-flyers.png';
import levpaotamplate from '../../assets/levpao-tamplate.png';
import levpaopost from '../../assets/levpao-post.png';
import levpaocardapio from '../../assets/levpao-cardapio.png';
import levpaostories from '../../assets/levpao-stories.png';


function Levpao() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={levpao} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>O que uma panificadora cheia de delícias pede? Uma página de dar água na boca aos antigos
              e novos seguidores que têm chegado todos os dias. Reestruturamos seu Instagram,
              padronizamos a identidade visual, incluindo ícones de destaques e os orientamos da
              importância de manter presença diariamente.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={levpaoweb} alt="" />
        <img src={levpaoflyers} alt="" />
        <img src={levpaotamplate} alt="" />
        <img src={levpaopost} alt="" />
        <img src={levpaocardapio} alt="" />
        <img src={levpaostories} alt="" />
      </div>

      <div className="rodape">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <a href="#" className="button-rodape">Quero fazer um orçamento <br/>para minha empresa!</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Levpao;