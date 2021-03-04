import styled from 'styled-components';
import RadioInputCircle from '../../assets/svg/RadioInputCircle';

type RadioInputType = {
    selected: boolean;
    color: string;
    text: string;
    onClick?: any 
}

function RadioInput({
    selected,
    color,
    text,
    onClick
}: RadioInputType) {

    return (
        <Container onClick={onClick}>
            <CheckCircle 
                selected={selected} 
                color={color} 
            >
                {selected 
                    ? <RadioInputCircle size={16} color={color} />
                    : <RadioInputCircle size={16} color={'white'} />
                }
            </CheckCircle>
            <CheckText
                color={color} 
            >
                {text}
            </CheckText>
        </Container>
    )
}

const Container = styled.span`
    margin-right: 3rem;
    cursor: pointer;
`

const CheckCircle = styled.span`
    color: ${props => props.color};
    font-size: 1.5rem;
`

const CheckText = styled.span`
    color: ${props => props.color};
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 3.7px;
    margin-left: 0.5rem;
`

export default RadioInput;