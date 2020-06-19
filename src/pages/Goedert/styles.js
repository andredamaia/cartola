import styled from 'styled-components';

import bgInterna from '../../assets/bg-chf-interna.jpg';

export const Container = styled.div`
    .banner-interna {
        background: url(${bgInterna}) center center no-repeat;
        background-size: cover;
    }
        .banner-interna .row { height: 70vh; position: relative; }
        .banner-interna .row::after {
            content: '';
            width: 3px;
            height: 80%;
            background: #fff;
            position: absolute;
            top: 0;
            bottom: 0;
            left: -30%;
            right: 0;
            margin: auto;
        }
        .banner-interna p { 
            color: #fff; 
            font-size: 20px; 
            line-height: 28px; 
            font-weight: 400;
            margin-bottom: 30px;
        }
        
    .content { padding: 80px 0; text-align: center; }
    .content img { max-width: 50%; margin: 60px 0; }



    .rodape {
        text-align: center;
        background: rgb(114,189,251);
    background: linear-gradient(166deg, rgba(114,189,251,1) 0%, rgba(109,129,245,1) 50%, rgba(125,78,250,1) 100%);
    height: 60px;
    }

    .button-rodape {
    padding: 10px 40px;
    margin-top: -45px;
    font-weight: bold;
    border-radius: 55px;
    display: inline-block;
    height: 65px;
    color: #fff;
    text-decoration: none;
    line-height: 23px;
    font-size: 15px;
    text-transform: uppercase;
    border: 1px solid #da155e;
    margin-left: 20px;
    transition: all .3s ease-in-out;
    text-align: center;
    background: rgb(243,142,54);
    background: linear-gradient(15deg, rgba(243,142,54,1) 0%, rgba(240,83,52,1) 50%, rgba(195,30,106,1) 100%);
    }


`;
