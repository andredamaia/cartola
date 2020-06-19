import React from 'react';

import { Container } from './styles';

import marlene from '../../assets/marlene.png';
import marlenepost1 from '../../assets/marlene-post-1.png';
import marlenepost2 from '../../assets/marlene-post-2.png';
import marlenecardapio from '../../assets/marlene-cardapio.png';
import marlenedestaques from '../../assets/marlene-destaques.png';
import marlenelogo from '../../assets/marlene-logo.png';
import marleneflyers from '../../assets/marlene-flyers.png';
import marlenefesta from '../../assets/marlene-festa.png';
import marlenesutra from '../../assets/marlene-sutra.png';
import marleneraspadinha from '../../assets/marlene-raspadinha.png';
import marleneimpressos from '../../assets/marlene-impressos.png';

function Marlene() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={marlene} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Uma pitada de ousadia, muita criatividade e campanhas de tirar o fôlego são a receita para
              cuidar de toda a comunicação desta casa noturna. Desde atualização do site, gestão de mídias
              sociais, até materiais impressos promocionais, para festas, feiras e brincadeiras.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={marlenepost1} alt="" />
        <img src={marlenepost2} alt="" />
        <img src={marlenecardapio} alt="" />
        <img src={marlenedestaques} alt="" />
        <img src={marlenelogo} alt="" />
        <img src={marleneflyers} alt="" />
        <img src={marlenefesta} alt="" />
        <img src={marlenesutra} alt="" />
        <img src={marleneraspadinha} alt="" />
        <img src={marleneimpressos} alt="" />
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

export default Marlene;