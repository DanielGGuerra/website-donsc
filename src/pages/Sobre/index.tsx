// import videoIcon from '../../assets/images/video.svg'
// import { ServiceBox } from '../../components/BoxService/box-services'
import { BodyStyle, SobreStyle } from './style'

export const Sobre = () => {
    return (
        <BodyStyle>
            <SobreStyle>
                <div id="text">
                    <h1>Sobre</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ii</p>
                </div>
            </SobreStyle>
            {/* <div>
                <h2>O que fazemos</h2>
                <ServiceBox title="Motion desing" icon={videoIcon} description="Fazemos vídeos interativos com animações incríveis."/>
            </div> */}
        </BodyStyle>
    )
}