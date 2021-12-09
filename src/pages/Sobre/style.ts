import styled from "styled-components";

import backgroundimg from '../../assets/images/sobre-background.svg'

export const BodyStyle = styled.body`
    background-color: #202020;
`

export const SobreStyle = styled.div`

width: 100vw;
height: 20vw;
background-image: url(${backgroundimg});
background-size: cover;

#text {
    position: absolute;
    
    margin: 20px auto;
    padding: 20px;
    left: 0;
    right: 0;

    width: 600px;
    height: 200px;


    color: #FFF;

    background: rgba(196, 196, 196, 0.3);
    border-radius: 20px;
}

`