import React from 'react';

import { Container } from './styles';

import pedraskraisch from '../../assets/pedras-kraisch.png';
import pedrasrevista1 from '../../assets/pedras-revista-1.png';
import pedrasrevista2 from '../../assets/pedras-revista-2.png';
import pedraspost1 from '../../assets/pedras-post-1.png';
import pedraspost2 from '../../assets/pedras-post-2.png';
import pedrasselo from '../../assets/pedras-selo.png';
import pedrasapresentacao from '../../assets/pedras-apresentacao.png';
import pedrassite1 from '../../assets/pedras-site-1.png';
import pedrassite2 from '../../assets/pedras-site-2.png';
import pedrasfolha from '../../assets/pedras-folha.png';

function Pedraskraisch() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={pedraskraisch} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Nosso desafio foi pegar uma marca já conhecida no mercado e fazê-la aparecer ainda mais.
              Estruturamos seu marketing, desde a comunicação interna à nova identidade para materiais
              impressos, gestão de mídias e reformulação do site. Com este cliente, mostramos de forma
              prática que quem não é visto não é lembrado.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={pedrasrevista1} alt="" />
        <img src={pedrasrevista2} alt="" />
        <img src={pedraspost1} alt="" />
        <img src={pedraspost2} alt="" />
        <img src={pedrasselo} alt="" />
        <img src={pedrasapresentacao} alt="" />
        <img src={pedrassite1} alt="" />
        <img src={pedrassite2} alt="" />
        <img src={pedrasfolha} alt="" />
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

export default Pedraskraisch;