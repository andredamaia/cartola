import React from 'react';

import button from './assets/button.png'



function Footer() {
    return(
        <>
            
            <div className="mapa">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3002462308887!2d-48.85520528526702!3d-26.251917172289787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafa4f71a838b%3A0x9118523ce82f9888!2sAv.%20Rolf%20Wiest%2C%20277%20-%20Bom%20Retiro%2C%20Joinville%20-%20SC%2C%2089223-005!5e0!3m2!1spt-BR!2sbr!4v1582897593512!5m2!1spt-BR!2sbr" width="105%" height="670" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                        </div>

                        <div className="col-12 col-md-6">
                            <p className="color-red">Manda uma <span className="mensagem">mensagem</span> pra gente!</p>

                            <form action="" className="row">
                                <div className="col-12 col-md-6">
                                    <div className= "input-block">
                                        <input name="nome-completo" id="nome-completo" placeholder="Nome completo" required />
                                    </div>
                                

                                    <div className="input-block">
                                        <input name="email" id="email" placeholder="e-mail" required />
                                    </div>
                                

                                    <div className= "input-block">
                                        <input name="telefone" id="telefone" placeholder="(DDD) 9xxxx-xxxx" required />
                                    </div>

                                    <textarea name="" id="" cols="30" rows="10" placeholder="mensagem"></textarea>
                                </div>

                                <button className="button-default"><img src={button} alt="" /></button>
                            </form>

                            

                            <div className="footer-black">
                                <div className="row">
                                    <div className="col-12 col-md-7 endereço">
                                        <h6>Endereço:</h6>

                                        <p>Avenida Rolf Wiest, 277, 2° andar<br/> Bom Retiro - CEP:89223-005 - joinville-SC </p>
                        
                                    </div>

                                    <div className="col-12 col-md-5 telefone">
                                        <h6>Telefone:</h6>

                                        <p>(47)3025-7421<br/> (47)99222-0029</p>
                                    </div>

                                    <div className="col-12 col-md-6 email">
                                        <h6>E-mail:</h6>

                                        <p>marcela@dacartola.com.br</p>

                                    </div>

                                    <div className="col-12 col-md-4 follow">
                                        <p>Follow us on<br/> <span className="instagram">Instagram</span></p>

                                    </div>

                                    <div className="col-12 col-md-2 dacartola">
                                        <p>@dacartola</p>
                                    </div>
              
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            
        
        
        </>
    )
}


export default Footer;