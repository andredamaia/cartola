import React from 'react';

import { Container } from './styles';

import mhglogo from '../../assets/mhg-logo.png';
import mhgfolder1 from '../../assets/mhg-folder-1.png';
import mhgfolder2 from '../../assets/mhg-folder-2.png';
import mhglogo2 from '../../assets/mhg-logo-2.png';
import mhgcard from '../../assets/mhg-card.png';
import mhgbanner from '../../assets/mhg-banner.png';
import mhgsite from '../../assets/mhg-site.png';


function Mhg() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={mhglogo} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Mais uma empresa que vestiu a Cartola, a MHG Industrial trocou de roupa e deixou seu visual
              ainda mais bonito, se destacando mais uma vez no mercado. O principal objetivo do projeto foi
              mostrar os serviços e produtos da empresa de forma prática e funcional, por meio do site
              responsivo e com navegação intuitiva, folder, cartões de visita e banner.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={mhgfolder1} alt="" />
        <img src={mhgfolder2} alt="" />
        <img src={mhglogo2} alt="" />
        <img src={mhgcard} alt="" />
        <img src={mhgbanner} alt="" />
        <img src={mhgsite} alt="" />
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

export default Mhg;