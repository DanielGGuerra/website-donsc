import { SevirceBoxStyle } from './style'

type BoxServiceProps = {
    icon: string;
    title: string;
    description: string;
    details?: string;
}

export function ServiceBox(props: BoxServiceProps) {
    return (
        <SevirceBoxStyle>
            <img src={props.icon} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </SevirceBoxStyle>
    )    
}