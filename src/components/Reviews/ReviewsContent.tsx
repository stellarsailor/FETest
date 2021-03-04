import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import LiquidGradientButton from '../RoundedButton';
import Speakers from '../../assets/images/SmallSpeaker3.png'
import { ReviewsArray } from '../../data/Reviews'

export type ReviewsContentProps = {
    topRightButton?: boolean;
    colorful?: boolean;
}

function ReviewsContent({
    topRightButton
}: ReviewsContentProps){

    return (
        <Container>
            <ButtonContainer>
                {topRightButton &&                 
                    <LiquidGradientButton 
                        text="TRY IT NOW"
                        color="var(--skyblue)"
                    />
                }
            </ButtonContainer>
            <ContentContainer>
                <SpeakerAndReviewsContainer>
                    <Row nogutter>
                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img src={Speakers} alt="speakers" width="100%" height="100%" />
                        </Col>
                        <Col xs={9} sm={9} md={9} lg={9} xl={9}>
                            <Title>
                                REVIEWS
                            </Title>
                            <Row gutterWidth={36} justify="center" >
                                {ReviewsArray.map( (v, index) => (
                                    <Col xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                                        <ReviewStars>
                                            {v.stars}
                                        </ReviewStars>
                                        <ReviewJobText>
                                            {v.job}
                                        </ReviewJobText>
                                        <ReviewDescriptionText>
                                        “{v.description}”
                                        </ReviewDescriptionText>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </SpeakerAndReviewsContainer>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--skyblue);
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

const SpeakerAndReviewsContainer = styled.div`
    padding: 5%;
`

const Title = styled.div`
    color: white;
    letter-spacing: 7.4px;
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 2rem;
`

const ReviewStars = styled.div`
    color: black;
    font-size: 2.5rem;
    font-weight: bold;
`

const ReviewJobText = styled.div`
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1rem;
`

const ReviewDescriptionText = styled.div`
    color: black;
    font-size: 1.8rem;
    margin-top: 2rem;
`

export default ReviewsContent;