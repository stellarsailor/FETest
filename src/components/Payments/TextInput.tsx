import styled from 'styled-components';

type TextInputType = {
    label: string;
    value: string;
    halved?: boolean;
}

function TextInput({
    label,
    value,
    halved,
}: TextInputType) {

    return (
        <Container>
            <Label>
                {label}
            </Label>
            <Input 
                type="text" 
                value={value} 
                halved={halved}
            />    
        </Container>
    )
}

const Container = styled.div`
    width: 90%;
    height: 50px;
`

const Label = styled.div`
    letter-spacing: 2.2px;
    margin-top: 2rem;
`

const Input = styled.input`
    width: ${props => props.halved ? '80%' : '100%'};
    height: 40px;
    font-size: 1.5rem;
    &:focus{
        outline: none;
        border-bottom: 4px solid #2F1FE9;
    }
`

export default TextInput