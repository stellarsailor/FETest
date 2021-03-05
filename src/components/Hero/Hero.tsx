import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import LiquidGradientButton from '../RoundedButton';

import Image1 from '../../assets/images/Image1.png'
import Image2 from '../../assets/images/Image2.png'
import Image3 from '../../assets/images/Image3.png'
import HeroCircle from '../../assets/svg/HeroCircle';

function Hero() {

    const [ page, setPage ] = useState(0)
    let images = [ Image1, Image2, Image3 ]

    useEffect(()=> {
        const interval = setInterval( () => {
            if(page === 2) setPage(0)
            else setPage(page+1)
        }, 10000)

        return () => {
            clearInterval(interval);
        }
    }, [page])

    return (
        <MainContainer currentImage={images[page]}>
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
            <PageButtonContainer>
                {images.map( (v, index) => (
                    <HeroCircle
                        selected={index === page}
                        size={16}
                        onClick={() => setPage(index)}
                    />
                ))}
            </PageButtonContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: ${props => `url(${props.currentImage})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s linear;
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

const PageButtonContainer = styled.div`
    width: 100%;
    position: absolute;
    margin-top: 90vh;
    z-index: 5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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