import React from 'react';

import { Container } from './styles';

import draana from '../../assets/dra-ana.png';

import draanafacebook from '../../assets/draana-facebook.png';
import draanainstagram from '../../assets/draana-instagram.png';
import draanapost from '../../assets/draana-post.png';


function Draana() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={draana} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Esta cliente ama a odontologia e nós amamos entregar além de posts completos, toda a gestão
              de sua página, como postagens, envio de relatórios trimestrais, campanhas de
              impulsionamento, artes para timeline e stories e auxílio nas respostas aos instagram.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={draanafacebook} alt="" />
        <img src={draanainstagram} alt="" />
        <img src={draanapost} alt="" />
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

export default Draana;