import React from 'react';
import Banner from './Banner'

import logo from './assets/logo.png'
import bgsobre from './assets/bg-sobre.png'






function Header(){
    return(
        <>
            <header>
                
                <div className="logo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                            
                            <img src={logo} alt=""/>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="menu">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
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

            <div className="bg-sobre">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <img src={bgsobre} alt=""/>
                            
                        </div>
                    </div>
                </div>
            </div>

                

            </header>
            <Banner/>
        </>
    )
       
}   


export default Header;