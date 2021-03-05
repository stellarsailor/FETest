import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import RoundedButton from '../Button/RoundedButton';
import CursorImage from '../../assets/images/cursor-reveal.png';
import Image from '../../assets/images/Image4.png'
import Mask from '../../assets/images/yellow-mask.png'

function Yellow(){
    return (
        <Container Image={Image}>
            <MaskContainer Image={Mask} />
            <ButtonContainer>
                <Link to="/pricing">
                    <RoundedButton 
                        text="TRY IT NOW"
                        color="var(--yellow)"
                        bgColor="white"
                    />
                </Link>
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
                            bgColor="white"
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
    background-image: ${props => `url(${props.Image})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    cursor: url(${CursorImage}), auto;
    z-index: 0;
`

const MaskContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-image: ${props => `url(${props.Image})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
`

const ContentContainer = styled.div`
    padding: 5%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
`

const ButtonContainer = styled.div`
    display: flex;
    align-self: flex-end;
    margin-top: 4rem;
    margin-right: 4rem;
    z-index: 10;
`

const MainText = styled.div`
    min-width: 600px;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 7.4px;
    margin-bottom: 2rem;
`

const SubText = styled.div`
    min-width: 600px;
    color: black;
    font-size: 2rem;
    letter-spacing: 5.1px;
    margin-bottom: 1.5rem;
`

export default Yellow;