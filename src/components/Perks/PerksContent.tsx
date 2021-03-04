import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import LiquidGradientButton from '../RoundedButton';
import { PerksArray } from '../../data/Perks'

export type PerksContentProps = {
    topRightButton?: boolean;
    colorful?: boolean;
}

function PerksContent({
    topRightButton,
    colorful
}: PerksContentProps){

    return (
        <Container colorful={colorful}>
            <ButtonContainer>
                {topRightButton && 
                    <LiquidGradientButton 
                        text="TRY IT NOW" 
                        gradient
                    />
                }
            </ButtonContainer>
            <ContentContainer>
                <PerksContainer>
                    <Title>
                        PERKS
                    </Title>
                    <Row gutterWidth={36} justify="center" >
                        {PerksArray.map( (v, index) => (
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} key={index} >
                                <Divider 
                                    color={v.color} 
                                    colorful={colorful} 
                                />
                                {v.title.map( (title, index) => (
                                    <PerksTitle 
                                        color={v.color}
                                        key={index}
                                    >
                                        {title}
                                    </PerksTitle>
                                ))}
                                <PerksDescription>
                                    {v.description}
                                </PerksDescription>
                            </Col>
                        ))}
                    </Row>
                </PerksContainer>
            </ContentContainer>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.colorful ? 'var(--darkbg)' : 'var(--red)' };
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

const PerksContainer = styled.div`
    padding: 5%;
`

const Title = styled.div`
    color: white;
    letter-spacing: 7.4px;
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 2rem;
`

const Divider = styled.div`
    width: 4rem;
    border-bottom: ${props => props.colorful ? `2px solid ${props.color}` : `2px solid white`};
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const PerksTitle = styled.div`
    color: ${props => props.colorful ? props.color : 'white'};
    font-size: 2.5rem;
    font-weight: bold;
`

const PerksDescription = styled.div`
    color: ${props => props.colorful ? props.color : 'black'};
    font-size: 1.8rem;
    margin-top: 2rem;
`

export default PerksContent;