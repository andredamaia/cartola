import React from 'react';


function Footer() {
    return(
        <>
            <div className="maps">
                <div className="container">
                    <div classname="row">
                        <div className="col-12 col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.300246230857!2d-48.855205284779856!3d-26.25191717229083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafa4f71a838b%3A0x9118523ce82f9888!2sAv.%20Rolf%20Wiest%2C%20277%20-%20Bom%20Retiro%2C%20Joinville%20-%20SC%2C%2089223-005!5e0!3m2!1spt-BR!2sbr!4v1582661932898!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </div>

                        <div className="col-12 col-md-6">
                            <p className="color-red">Manda uma <span className="mensagem">mensagem</span> pra gente!</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="input-block">
                                <input name="nome" id="nome" placeholder="Nome completo" required />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="input-block">
                                <input name="email" id="email" placeholder="e-mail" required />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer;