import React from 'react';

import { Container } from './styles';

import isoplast from '../../assets/isoplast.png';
import isoplastlogo from '../../assets/isoplast-logo.png';
import isoplastapresentacao from '../../assets/isoplast-apresentacao.png';
import isoplastmidia from '../../assets/isoplast-midia.png';
import isoplastimpressos from '../../assets/isoplast-impressos.png';
import isoplastflyers from '../../assets/isoplast-flyers.png';
import isoplastsite from '../../assets/isoplast-site.png';


function Isoplast() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={isoplast} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Esta empresa antiga estava precisando dar uma recauchutada na sua imagem e nos chamou
              para uma parceria para desenvolvermos toda sua papelaria, materiais de divulgação (folder,
              outdoor, caderno, e-mails marketing) até gestão de mídias sociais e a criação de um novo site.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={isoplastlogo} alt="" />
        <img src={isoplastapresentacao} alt="" />
        <img src={isoplastmidia} alt="" />
        <img src={isoplastimpressos} alt="" />
        <img src={isoplastflyers} alt="" />
        <img src={isoplastsite} alt="" />
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

export default Isoplast;