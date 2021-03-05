import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RoundedButton from '../RoundedButton';

function GetNow() {

    return (
        <Container>
            <TextContainer>
                <MainText>
                    GET EXP|CON NOW
                </MainText>
                <SubText>
                    Purchase and download the app.
                </SubText>
            </TextContainer>
            <ButtonContainer>
                <Link to="/pricing">
                    <RoundedButton 
                        text="TRY IT NOW" 
                        gradient
                    />
                </Link>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 50vh;
    background-color: var(--darkbg);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const TextContainer = styled.div`
    margin-left: 5%;
    display: flex;
    flex-direction: column;
`

const ButtonContainer = styled.div`
    margin-right: 5%;
`

const MainText = styled.div`
    color: var(--red);
    font-weight: bold;
    font-size: 3rem;
    letter-spacing: 7.4px;
`

const SubText = styled.div`
    color: white;
    font-size: 2rem;
    letter-spacing: 5.1px;
`

export default GetNow;