import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import RoundedButton from '../RoundedButton';
import CursorImage from '../../assets/images/cursor-reveal.png';

function Yellow(){
    return (
        <Container>
            <ButtonContainer>
                <RoundedButton 
                text="TRY IT NOW"
                color="var(--yellow)"
                />
            </ButtonContainer>
            <ContentContainer>
                <Row nogutter justify="center" align="center">
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <div style={{width: '100%', height: '60%'}} />
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <MainText>
                            FRONT ROW SEATS
                        </MainText>
                        <SubText>
                            Experience concerts up close and personal.
                        </SubText>
                        <RoundedButton 
                            text="SEE DEMO"
                            color="var(--yellow)"
                        />
                    </Col>
                </Row>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--yellow);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: url(${CursorImage}), auto;
`

const ContentContainer = styled.div`
    padding: 5%;
`

const ButtonContainer = styled.div`
    display: flex;
    align-self: flex-end;
    margin-right: 4rem;
`

const MainText = styled.div`
    min-width: 600px;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 7.4px;
    margin-bottom: 1rem;
`

const SubText = styled.div`
    color: black;
    font-size: 2rem;
    letter-spacing: 5.1px;
    margin-bottom: 1.5rem;
`

export default Yellow;