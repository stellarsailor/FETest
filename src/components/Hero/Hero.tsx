import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import LiquidGradientButton from '../RoundedButton';

import Image1 from '../../assets/images/Image1.png'

function Hero() {

    return (
        <MainContainer>
            <BlackBox />
            <Row nogutter justify="center">
                <Col xs={10} sm={4} md={6} lg={8} xl={12}>
                    <MainTextContainer>
                        <BoldTitle>
                            INTERACTIVE CONCERT EXPERIENCE
                        </BoldTitle>
                        <DescriptionContainer>
                            <Description>
                                Experience your favourite artists like never 
                            </Description>
                            <Description>
                                before and from the comfort of your own home.
                            </Description>
                        </DescriptionContainer>
                        <LiquidGradientButton 
                            text="TRY IT NOW"
                            gradient
                        />
                    </MainTextContainer>
                </Col>
            </Row>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: ${props => `url(${Image1})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const BoldTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    color: white;
    letter-spacing: 6.5px;
    margin-bottom: 2rem;
`

const DescriptionContainer = styled.div`
    margin-bottom: 2rem;
`

const Description = styled.div`
    font-size: 1.5rem;
    color: white;
    letter-spacing: 3.2px;
`

const BlackBox = styled.div` 
    //for text readability
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(0,0,0, 0.7);
    z-index: 0;
`

export default Hero;