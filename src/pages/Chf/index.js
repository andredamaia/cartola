import React from 'react';

import { Container } from './styles';

import logoChf from '../../assets/logo-chf.png';
import site from '../../assets/site.jpg';
import catalogo from '../../assets/catalogos-chf.jpg';
import carro from '../../assets/carro-chf.jpg';

function Chf() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={logoChf} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Transmitimos a seriedade de uma empresa de construção civil para seus materiais. Levando em consideração a qualidade de suas obras e seu principal público (estabelecimentos da área de saúde, comercial e industrial), apostamos em formas leves e clean, com conteúdo relevante, nas peças online e off-line. </p>

              <p>O site foi totalmente repaginado, adaptável para diferentes mídias e com navegação ainda mais agradável. </p>

              <p>Materiais novos, marca reforçada, cliente satisfeito.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={site} alt="" />
        <img src={catalogo} alt="" />
        <img src={carro} alt="" />
      </div>
    </Container>
  );
}

export default Chf;