import React from 'react';

import { Container } from './styles';

import logochf from '../../assets/logo-chf.png';
import chfapresentacao from '../../assets/chf-apresentacao.png';
import chfbook from '../../assets/chf-book.png';
import chfcarro from '../../assets/chf-carro.png';
import chfcartao1 from '../../assets/chf-cartao-1.png';
import chfcartao2 from '../../assets/chf-cartao-2.png';
import chfpasta1 from '../../assets/chf-pasta-1.png';
import chfpasta2 from '../../assets/chf-pasta-2.png';
import chfsite1 from '../../assets/chf-site-1.png';
import chfsite2 from '../../assets/chf-site-2.png';

function Chf() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={logochf} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Experiência, conhecimento e confiança. Esta é a imagem que vimos transmitindo ao longo dos anos para este cliente, com campanhas completas de posicionamento e reforço da marca, por meio de mídia online, atualização constante do site, gestão de mídias sociais e material impresso. Os resultados você confere abaixo</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={chfsite1} alt="" />
        <img src={chfsite2} alt="" />
        <img src={chfpasta1} alt="" />
        <img src={chfpasta2} alt="" />
        <img src={chfcarro} alt="" />
        <img src={chfapresentacao} alt="" />
        <img src={chfcartao1} alt="" />
        <img src={chfcartao2} alt="" />
        <img src={chfbook} alt="" />
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

export default Chf;