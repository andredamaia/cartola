import React from 'react';

import { Container } from './styles';

import marlene from '../../assets/marlene.png';
import aguiacard from '../../assets/aguia-card.png';
import aguiapost from '../../assets/aguia-post.png';
import aguiaapostila from '../../assets/aguia-apostila.png';
import aguiaflyers from '../../assets/aguia-flyers.png';
import aguiaemail from '../../assets/aguia-email.png';
import aguiavinho from '../../assets/aguia-vinho.png';
import aguiacartoes from '../../assets/aguia-cartoes.png';
import aguiabaloes from '../../assets/aguia-baloes.png';
import aguiatotens from '../../assets/aguia-totens.png';
import aguiacamisetas from '../../assets/aguia-camisetas.png';

function Aguiaconsultoria() {
  return (
    <Container>
      <div className="banner-interna">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-5">
              <img src={marlene} alt="Construtora CHF" />
            </div>

            <div className="col-12 col-md-7">
              <p>Um diferencial no mercado de Joinville e região, a Águia demandava um projeto de
              comunicação à altura de seu produto, atendimento e cliente. Com base neste alto nível de
              exigência, a Cartola reforçou sua marca em materiais como flyers, cartão de visitas, camisetas,
              totem, gestão de mídias sociais, layout para fachada, entre outros.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <img src={aguiacard} alt="" />
        <img src={aguiapost} alt="" />
        <img src={aguiaapostila} alt="" />
        <img src={aguiaflyers} alt="" />
        <img src={aguiaemail} alt="" />
        <img src={aguiavinho} alt="" />
        <img src={aguiacartoes} alt="" />
        <img src={aguiabaloes} alt="" />
        <img src={aguiatotens} alt="" />
        <img src={aguiacamisetas} alt="" />
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

export default Aguiaconsultoria;