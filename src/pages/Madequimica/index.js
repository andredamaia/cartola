import React from 'react';

import { Container } from './styles';

import madequimica from '../../assets/madequimica.png';
import madequimicashow from '../../assets/madequimica-show.png';
import madequimicacamisetas from '../../assets/madequimica-camisetas.png';
import madequimicatintas1 from '../../assets/madequimica-tintas-1.png';
import madequimicamidias from '../../assets/madequimica-midias.png';
import madequimicacartao from '../../assets/madequimica-cartao.png';
import madequimicatintas2 from '../../assets/madequimica-tintas-2.png';
import madequimicapasta from '../../assets/madequimica-pasta.png';
import madequimicasite from '../../assets/madequimica-site.png';


function Madequimica() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={madequimica} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>O desafio aqui foi criar um novo logotipo e assim toda a nova identidade do grupo, que abrange
              3 empresas (Madequímica, Madevia e Show Tintas). Inventamos moda e criamos embalagens
              diferenciadas para suas tintas e produtos similares, além de fazermos 3 sites em 1, gestão de
              mídias sociais, uniformes, brindes, entre outros.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={madequimicashow} alt="" />
        <img src={madequimicacamisetas} alt="" />
        <img src={madequimicatintas1} alt="" />
        <img src={madequimicamidias} alt="" />
        <img src={madequimicacartao} alt="" />
        <img src={madequimicatintas2} alt="" />
        <img src={madequimicapasta} alt="" />
        <img src={madequimicasite} alt="" />
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

export default Madequimica;