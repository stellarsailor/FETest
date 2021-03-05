import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import MusicalNote from '../../assets/svg/MusicalNote'
import { PricingArray } from '../../data/Pricing'
import LiquidGradientButton from '../RoundedButton';

function PricingContent({}){

    return (
        <Container>
            <Row nogutter justify="center">
                <Col lg={10} xl={10}>
                    <Title>
                        PRICING
                    </Title>
                    <Description>
                        Test out our app today! Choose from three subscription Based payment models.
                    </Description>
                </Col>
            </Row>
            <ContentContainer>
                <Row gutterWidth={36} justify="center" >
                    {PricingArray.map( (v, index) => (
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} key={index} >
                            <PricingType color={v.color}> 
                                {v.type}
                            </PricingType>
                            <Divider color={v.color} />
                            <PricingDuration color={v.color}>
                                {v.duration}
                            </PricingDuration>
                            <PricingPrice color={v.color}>
                                ${v.price}
                            </PricingPrice>
                            {v.features.map( (title, index) => (
                                <PricingFeature 
                                    color={v.color}
                                    key={index}
                                >
                                    <MusicalNote 
                                        size="1.2rem" 
                                        color="white" 
                                    /> {title}
                                </PricingFeature>
                            ))}
                            <br />
                            <LiquidGradientButton 
                                text="SELECT"
                                bgColor={v.color}
                            />
                        </Col>
                    ))}
                </Row>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--darkbg);
    color: white;
    padding-top: 8rem;
`

const ContentContainer = styled.div`
    margin-left: 5%;
    padding: 5%;
    margin-bottom: 2rem;
`

const Title = styled.div`
    color: white;
    letter-spacing: 7.4px;
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 2rem;
`

const Description = styled.div`
    color: white;
    letter-spacing: 5.1px;
    font-size: 1.8rem;
`

const Divider = styled.div`
    width: 6rem;
    border-bottom: ${props => `2px solid ${props.color}`};
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const PricingType = styled.div`
    color: ${props => props.color};
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 4.2px;
`

const PricingDuration = styled.div`
    color: ${props => props.color};
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 4.7px;
`

const PricingPrice = styled.div`
    color: ${props => props.color};
    font-size: 6rem;
    font-weight: bold;
    letter-spacing: 13.5px;
    margin-bottom: 2rem;
`

const PricingFeature = styled.div`
    color: white;
    font-size: 1.8rem;
    letter-spacing: 4.7px;
`

export default PricingContent;