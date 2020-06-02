import React from 'react';

import button from '../../assets/button.png';

const Empresa = () => {
    return (
        <div className="bg-sou-empresa">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                    
                    <span className="sou-empresa">Sou empresa</span> 

                    </div>

                    <div className="col-12 col-md-6">
                    <p>Nos passe um <strong><i>Briefing</i></strong> sobre sua campanha para encontrarmos o melhor <strong>influenciador para sua marca!</strong></p>
                    </div>
                </div>

                <form action="" className="row">
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="nome da empresa" id="nome da empresa" placeholder="Nome da empresa" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-4">
                    <div className="input-block">
                        <input name="nome do responsavel" id="nome do responsavel" placeholder="Nome do responsável" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-2">
                    <div className="input-block">
                        <input name="cargo" id="cargo" placeholder="cargo" required />
                    </div>
                    </div>
                

                
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="DDD" id="DDD" placeholder="(DDD) 9XXXX-XXXX" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="email" id="email" placeholder="e-mail" required />
                    </div>
                    </div>
                

                
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="tipo de campanha" id="tipo de campanha" placeholder="tipo de campanha" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="objetivo da campanha" id="objetivo da campanha" placeholder="objetivo da campanha" required />
                    </div>
                    </div>
                

                
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="persona da campanha" id="persona da campanha" placeholder="persona da campanha" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="nichos" id="nichos" placeholder="nichos # (separados por ,)" required />
                    </div>
                    </div>
                

                
                    <div className="col-12 col-md-3">
                    <div className="input-block">
                        <input name="gênero" id="gênero" placeholder="gênero" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-3">
                    <div className="input-block">
                        <input name="duração" id="duração" placeholder="duração" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="localização" id="localização" placeholder="localização" required />
                    </div>
                    </div>
                

                
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="verba $" id="verba $" placeholder="verba $" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-6">
                    <button className="button-default"> <img src={button} alt="" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Empresa;
