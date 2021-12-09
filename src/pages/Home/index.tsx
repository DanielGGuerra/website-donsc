import logoImg from '../../assets/images/logo.svg'
import circleImg from '../../assets/images/circle_bg.svg'
import arrowImg from '../../assets/images/arrow.svg'

import { HeaderStyle, BodyStyle, MainStyle, ButtonStyle } from './style'

// import { Link } from 'react-router-dom'

export function Home() {
    return (
        <>
            <BodyStyle>
                <HeaderStyle>
                    <div>
                        <img src={logoImg} alt="donscreative" />
                    </div>
                    <div>
                        <ul>
                            <li><a href="/sobre">A donsc.</a></li>
                            <li><a href="http://localhost:3000/">Portifólio</a></li>
                            <li><a href="http://localhost:3000/">Contato</a></li>
                        </ul>
                    </div>
                </HeaderStyle>
                <MainStyle>
                    <div id="text">
                        <p>Bem-vindo, Somos uma</p>
                        <p>agência de <b>design</b> e</p>
                        <p><b>marketing</b></p>
                        <p id="p-parceria">#PartiuParceria?</p>

                        <ButtonStyle onClick={()=> {console.log('click')}}>Fazer orçamento</ButtonStyle>

                    </div>
                    <div>
                        <img id="circle" src={circleImg} alt="Circulos" />
                    </div>
                    <img id="seta" src={arrowImg} alt="Seta para baixo" />
                </MainStyle>
            </BodyStyle>
        </>
    )
}