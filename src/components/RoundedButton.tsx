import styled from 'styled-components';

type ButtonProps = {
    text: string;
    width?: string;
    height?: string;
    color?: string;
    bgColor?: string;
    gradient?: boolean;
    disabled?: boolean;
}

function RoundedButton( {
    text,
    width,
    height,
    color,
    bgColor,
    gradient,
    disabled,
}: ButtonProps ){

    return (
        <ButtonContainer
            width={width}
            height={height}
            bgColor={bgColor}
            gradient={gradient}
            disabled={disabled}
        >
            <ButtonText color={color}>
                {text}
            </ButtonText>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    width: ${props => props.width ? props.width : '15rem' };
    height: ${props => props.height ? props.height : '4rem' };
    background: ${props => props.gradient 
        ? 'transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 34%, #D34848 65%, #FFB33F 100%) 0% 0% no-repeat padding-box' 
        : props.bgColor 
    };
    border-radius: 79px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: ${props => props.disabled ? 'auto' : 'pointer'};
    z-index: 10;
`

const ButtonText = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 2.3px;
    color: ${props => props.color ? props.color : 'white' };
`

export default RoundedButton;