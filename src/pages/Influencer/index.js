import React from 'react';

import avatar from '../../assets/avatar.png';
import button from '../../assets/button.png';

const Influencer = () => {
    return (
        <div className="bg-sou-influencer">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                    
                    <p> <span className="influencer">Sou influencer</span> <strong>Cadastre-se</strong> para participar de campanhas</p>

                    </div>
                </div>

                <form action="" className="row">
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="nome-completo" id="nome-completo" placeholder="Nome completo" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-5">
                    <div className="input-block">
                        <input name="email" id="email" placeholder="E-mail" required />
                    </div>
                    </div>
                
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="DDD" id="DDD" placeholder="(DDD) 9XXXX-XXXX" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-3">
                    <div className="input-block rede-sociais">
                        <input name="redes-sociais" id="redes-sociais" placeholder="redes sociais" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-3">
                    <div className="input-block">
                        <input name="plataforma" id="plataforma" placeholder="plataforma" required />
                    </div>
                    </div>
                

                
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="link-kard" id="link-kard" placeholder="link kard Kuak.com" required />
                    </div>
                    </div>

                    <div className="col-12 col-md-5">
                    <div className="input-block">
                        <input name="nichos" id="nichos" placeholder="Nichos # (separados por , )" required />
                    </div>
                    </div>
                

                
                    <div className="col-12 col-md-6">
                    <div className="input-block">
                        <input name="upload" id="upload" placeholder="fazer upload de midia kit em pdf" required />
                    </div>

                    <textarea name="" id="" cols="30" rows="10" placeholder="sobre mim"></textarea>
                    </div>
                
                    

                    <div className="col-12 col-md-3">
                    <img className="photo" src={avatar} alt="" />
                    </div>

                    <div className="col-12 col-md-3 text-center">
                    
                    <a href="/" className="button-midia-kit"> 
                        Preciso de um <span className="color-pink">midia-kit!</span>
                    </a>

                    <button className="button-default"><img src={button} alt="" /></button>            


                    </div>

                </form>
            </div>    
        </div>
    );
}

export default Influencer;
