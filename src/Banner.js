import React from 'react';

import text1 from './assets/text-1.png'



function Banner(){
    return(
        <>
            <div className="banner">
                <div className="container">
                    <div classname="row">
                        <div className="col-12">
                            <img src={text1} alt="" />
                        </div>
                    </div>

                </div>
            </div>


        </>
    )     
}

export default Banner;
