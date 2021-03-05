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

    const hover = (e) => {
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
        // console.log(e.target.style.cssText)
    }

    return (
        <ButtonContainer
            width={width}
            height={height}
            bgColor={bgColor}
            gradient={gradient}
            disabled={disabled}
            onMouseMove={(e) => hover(e)}
        >
            <ButtonText color={color} >
                {text}
            </ButtonText>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    position: relative;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    width: ${props => props.width ? props.width : '15rem' };
    height: ${props => props.height ? props.height : '4rem' };
    background: ${props => props.gradient 
        ? 'transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 34%, #D34848 65%, #FFB33F 100%) 0% 0% no-repeat padding-box' 
        : props.bgColor 
    };
    border-radius: 79px;
    opacity: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: ${props => props.disabled ? 'auto' : 'pointer'};
    z-index: 10;
    &:before{
        --size: 0px;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, #4405f7, transparent);
        -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
        transition: width .2s ease, height .2s ease;
    }
    &:hover:before{
        --size: 300px;
    }
`

const ButtonText = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 2.3px;
    pointer-events: none;
    color: ${props => props.color ? props.color : 'white' };
    z-index: 20;
`

export default RoundedButton;