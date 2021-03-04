import { useState } from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import RadioInput from '../../components/Payments/RadioInput';
import SelectBox from '../../components/Payments/SelectBox';
import TextInput from '../../components/Payments/TextInput';
import RoundedButton from '../../components/RoundedButton';
import { CountriesArray } from '../../data/Countries';
import { MonthsArray, YearArray } from '../../data/Date';
import { PricingArray } from '../../data/Pricing'

export type PaymentsProps = {}

function Payments({}: PaymentsProps){

    const [ selectedType, setSelectedType ] = useState<number>(0)

    return (
        <Container>
            <ContentContainer>
                <MainTitle>
                    PAYMENT
                </MainTitle>
                <SubTitle>
                    1. Select your plan
                </SubTitle>
                <div style={{marginTop: '1rem'}} />
                {PricingArray.map((v, index) => (
                    <RadioInput 
                        selected={selectedType === index}
                        onClick={() => setSelectedType(index)}
                        color={v.color} 
                        text={v.type} 
                        key={index} 
                    />
                ))}
                <Row nogutter style={{minHeight: 450}}>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <SubTitle>
                            2. Billing Information
                        </SubTitle>
                        <TextInput 
                            label="FULL NAME" 
                            value={'Mathew Mozaff'} 
                        />
                        <TextInput 
                            label="BILLING ADDRESS" 
                            value={''} 
                        />
                        <GroupingInput>
                            <TextInput 
                                label="CITY" 
                                value={''} 
                                halved
                            />
                            <TextInput 
                                label="POSTAL CODE" 
                                value={''} 
                                halved
                            />
                        </GroupingInput>
                        <SelectBox 
                            label="COUNTRY" 
                            value={''} 
                            selectArray={CountriesArray}
                        />
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <SubTitle>
                            3. Credit Card Information
                        </SubTitle>
                        <TextInput 
                            label="CARDHOLDER'S NAME" 
                            value={''} 
                        />
                        <TextInput 
                            label="CARD NUMBER" 
                            value={''} 
                        />
                        <GroupingInput>
                            <SelectBox 
                                label="EXPIRY MONTH" 
                                value={''} 
                                halved
                                selectArray={MonthsArray}
                            />
                            <SelectBox 
                                label="EXPIRY YEAR" 
                                value={''} 
                                halved
                                selectArray={YearArray}
                            />
                        </GroupingInput>
                        <TextInput 
                            label="CVV" 
                            value={''} 
                        />
                    </Col>
                </Row>
                
                <TermsContainer>
                    By continuing, I acknowledge that I’ve read and agree to the <TermsLink>Terms of Service</TermsLink> & <TermsLink>Privacy Policy</TermsLink>.
                </TermsContainer>  
                <RoundedButton
                    text="DOWNLOAD"
                    gradient
                />  
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const ContentContainer = styled.div`
    padding: 5% 10%;
`

const MainTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 7.4px;
`

const SubTitle = styled.div`
    font-size: 1.5rem;
    letter-spacing: 4.5px;
    margin-top: 4rem;
`

const GroupingInput = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 4rem;
`

const TermsContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 2rem;
`

const TermsLink = styled.a`
    color: #2F1FE9;
    text-decoration: none;
    cursor: pointer;
`

export default Payments;