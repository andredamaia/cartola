import React from 'react';

import { Container } from './styles';

import drvinicius from '../../assets/dr-vinicius.png';
import drviniciusinstagram from '../../assets/drvinicius-instagram.png';
import drviniciusebook from '../../assets/drvinicius-ebook.png';
import drviniciusfacebook from '../../assets/drvinicius-facebook.png';
import drviniciusdestaque from '../../assets/drvinicius-destaque.png';


function Drvinicius() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={drvinicius} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Trabalhamos numa identidade clean, organizada e efetiva para suas páginas no Instagram e
              Facebook. Com foco em prótese mamária, lipoaspiração e abdominoplastia, este cirurgião
              plástico é um case, ao longo de 1 ano conquistou 10 mil seguidores com posts assertivos,
              campanhas de impulsionamento e comunicação diária por meio de stories e direct.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={drviniciusinstagram} alt="" />
        <img src={drviniciusebook} alt="" />
        <img src={drviniciusfacebook} alt="" />
        <img src={drviniciusdestaque} alt="" />
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

export default Drvinicius;