import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import RoundedButton from '../Button/RoundedButton';
import Player from '../Player/index'

function Red(){
    return (
        <Container>
            <ButtonContainer>
                <Link to="/pricing">
                    <RoundedButton 
                        text="TRY IT NOW"
                        color="var(--red)"
                        bgColor="white"
                    />
                </Link>
            </ButtonContainer>
            <ContentContainer>
                <Row nogutter justify="center" align="center">
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <MainText>
                            SUPERIOR SOUND
                        </MainText>
                        <SubText>
                            Experience live versions of your favourite songs.
                        </SubText>
                        <RoundedButton 
                            text="SEE DEMO"
                            color="var(--red)"
                            bgColor="white"
                        />
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        {/* <img src={Speakers} alt="speakers" width="100%" height="100%" /> */}
                        <Player url="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3" />
                    </Col>
                </Row>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--red);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export default Red;