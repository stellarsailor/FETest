import styled from 'styled-components';
import Mail from '../../assets/svg/Mail';

function Footer() {

    return (
        <Container>
            <MailContainer>
                <Mail color="white" size={'1.5rem'} />
                <MailText href="mailto:support@experienceconcerts.co">
                    support@experienceconcerts.co
                </MailText>
            </MailContainer>
            <CompanyContainer>
                <CompanyTitle>
                    EXP|CON
                </CompanyTitle>
                <Copyright>
                    2019 © All Rights Reserved | Speer Technologies Incorporated
                </Copyright>
            </CompanyContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 20rem;
    background-color: var(--purple);
`

const MailContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 6rem;
    padding-left: 8rem;
    margin-bottom: 2rem;
`

const MailText = styled.a`
    color: white;
    font-size: 1.5rem;
    margin-left: 0.5rem;
    text-decoration: none;
`

const CompanyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CompanyTitle = styled.div`
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
`

const Copyright = styled.div`
    font-size: 1rem;    
    color: white;
`

export default Footer;