import React from 'react';

import { Container } from './styles';

import adoremus from '../../assets/adoremus.png';
import adoremuscard from '../../assets/adoremus-card.png';
import adoremusbanner from '../../assets/adoremus-banner.png';
import adoremusflyers from '../../assets/adoremus-flyers.png';
import adoremussite from '../../assets/adoremus-site.png';


function Adoremus() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={adoremus} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>A empresa voltada para fabricação e venda de artigos religiosos precisava de um site que
              falasse de seus diferenciais e serviços, além de mostrar cada detalhe de seus produtos em
              forma de e-commerce. A ideia foi fazer um catálogo virtual, valorizando cada peça.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={adoremuscard} alt="" />
        <img src={adoremusbanner} alt="" />
        <img src={adoremusflyers} alt="" />
        <img src={adoremussite} alt="" />
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

export default Adoremus;