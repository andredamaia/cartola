import React from 'react';



import logo from './assets/logo.png'



function Header(){
    return(
        <>
            <header>
    
                <div className="logo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-6">

                                <img src={logo} alt=""/>

                            </div>
                            
                            <div className="col-12 col-md-6 menu">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>

                                    <li>
                                        <a href="#">Sobre</a>
                                    </li>
                                    
                                    <li>
                                        <a href="#">Cases</a>
                                    </li>

                                    <li>
                                        <a href="#">Serviços</a>
                                    </li>

                                    <li>
                                        <a href="#">Contato</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </header>

            
            
            
        </>
    )
       
}   


export default Header;