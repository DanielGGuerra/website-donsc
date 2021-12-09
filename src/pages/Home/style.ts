import styled from "styled-components";

export const BodyStyle = styled.body`
    width: 100%;
    hei
`

export const HeaderStyle = styled.header
    `
    width: 80vw;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2vw;

    img {
        max-width: 100%;
    }

    ul {
        list-style-type: none;
        display: flex;

        li {
            padding: 1vw;
            a {
                text-decoration: none;
                color: black;
            }

            a:hover {
                text-decoration: underline;
            }
        }
    }
`

export const MainStyle = styled.main`
    width: 80vw;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    #text {
       font-size: 2rem;
    }

    #p-parceria {
        color: #888888;
    }
    
    #circle {
        max-width: 100%;
    }

    #seta {
        position: absolute;
        bottom: 1vw;
        left: 10vw; 
    }

`
export const ButtonStyle = styled.button`
    margin-top: 15%;	
    width: 20vw;
    height: 3vw;

    border: double 2px transparent;
    border-radius: 20px;

    background-image: linear-gradient(white, white), radial-gradient(circle at top left, red, blue);
    background-origin: border-box;
    background-clip: content-box, border-box;

    font-size: 1rem;

    &&:hover {
        cursor: pointer;
        background-image: none;
        background-color: #8F52F2;
        color: #FFF;
    }
`