import React from 'react';

import { Container } from './styles';

import goedert from '../../assets/goedert.png';
import goedertbanner from '../../assets/goedert-banner.png';
import goedertsite from '../../assets/goedert-site.png';
import goedertgoogle from '../../assets/goedert-google.png';


function Goedert() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={goedert} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Mais um case de cliente com grandes potenciais, mas sem um planejamento e padrão visual
              que destacassem seus diferenciais. Foi aí que a Cartola entrou em cena com Google Ads e
              Gestão de Mídias Sociais, criou uma identidade harmônica que vem fazendo jus à empresa e
              aos seus inúmeros novos clientes que não param de contatá-los.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={goedertbanner} alt="" />
        <img src={goedertsite} alt="" />
        <img src={goedertgoogle} alt="" />
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

export default Goedert;