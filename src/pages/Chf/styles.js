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
    .content img { max-width: 85%; margin: 60px 0; }
`;
