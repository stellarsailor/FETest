import styled from 'styled-components';

type SelectBoxType = {
    label: string;
    value: string;
    halved?: boolean;
    selectArray: Array<any>
}

function SelectBox({
    label,
    value,
    halved,
    selectArray
}: SelectBoxType) {

    return (
        <Container>
            <Label>
                {label}
            </Label>
            <Select 
                type="text" 
                value={value} 
                halved={halved}
            >
                {selectArray.map( (v, index) => (
                    <option value={v} key={index}>{v}</option>
                ))}
            </Select>
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

const Select = styled.select`
    width: ${props => props.halved ? '80%' : '100%'};
    height: 40px;
    font-size: 1.5rem;
`

export default SelectBox