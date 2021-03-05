import { useState } from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import RadioInput from '../../components/Payments/RadioInput';
import SelectBox from '../../components/Payments/SelectBox';
import TextInput from '../../components/Payments/TextInput';
import RoundedButton from '../Button/RoundedButton';
import { CountriesArray } from '../../data/Countries';
import { MonthsArray, YearArray } from '../../data/Date';
import { PricingArray } from '../../data/Pricing'

export type PaymentsPropsType = {}

function Payments({}: PaymentsPropsType){

    const [ selectedType, setSelectedType ] = useState<number>(0)

    const [ fullname, setFullname ] = useState<string>('')
    const [ address, setAddress ] = useState<string>('')
    const [ city, setCity ] = useState<string>('')
    const [ postalCode, setPostalCode ] = useState<string>('')
    const [ cardHoldersName, setCardHoldersName ] = useState<string>('')
    const [ cardNumber, setCardNumber ] = useState<string>('')
    const [ CVV, setCVV ] = useState<string>('')

    return (
        <Container>
            <Menu />
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
                            value={fullname} 
                            setValue={setFullname}
                        />
                        <TextInput 
                            label="BILLING ADDRESS" 
                            value={address} 
                            setValue={setAddress}
                        />
                        <GroupingInput>
                            <TextInput 
                                label="CITY" 
                                value={city} 
                                setValue={setCity}
                                halved
                            />
                            <TextInput 
                                label="POSTAL CODE" 
                                value={postalCode} 
                                setValue={setPostalCode}
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
                            value={cardHoldersName} 
                            setValue={setCardHoldersName}
                        />
                        <TextInput 
                            label="CARD NUMBER" 
                            value={cardNumber} 
                            setValue={setCardNumber}
                        />
                        <GroupingInput>
                            <SelectBox 
                                label="EXPIRY MONTH" 
                                value={''} 
                                halved
                                selectArray={MonthsArray} //need to string -> parseInt
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
                            value={CVV} 
                            setValue={setCVV}
                        />
                    </Col>
                </Row>
                
                <TermsContainer>
                    By continuing, I acknowledge that I’ve read and agree to the <TermsLink>Terms of Service</TermsLink> & <TermsLink>Privacy Policy</TermsLink>.
                </TermsContainer>  
                {
                    fullname === '' || address === '' || city === '' || postalCode === '' || cardHoldersName === '' || cardNumber === '' || CVV === '' 
                    ?
                        <RoundedButton
                            text="DOWNLOAD"
                            bgColor="lightgray"
                            disabled
                        />
                    :
                        <RoundedButton
                            text="DOWNLOAD"
                            gradient
                        />
                }
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