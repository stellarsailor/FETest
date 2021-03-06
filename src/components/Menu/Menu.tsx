import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import styled from 'styled-components';
import Hamburger from '../../assets/svg/Hamburger';

const initialProps = { opacity: 0 }
const animateProps = { opacity: 1 }

function Menu() {

    const [ pager, setPager ] = useState(0)
    const colorReference = {
        0: {
            bgColor: 'var(--skyblue)',
            hoverColor: 'black',
        },
        1: {
            bgColor: '#0B0B0B',
            hoverColor: 'var(--red)',
        },
        2: {
            bgColor: '#0B0B0B',
            hoverColor: 'var(--yellow)',
        },
        3: {
            bgColor: 'var(--skyblue)',
            hoverColor: 'black',
        },
        4: {
            bgColor: '#0B0B0B',
            hoverColor: 'var(--skyblue)',
        }
    }
        
    const handleScroll = () => {
        const position = window.pageYOffset;
        const h = window.innerHeight
        let currentPage = Math.floor(position / h)

        setPager(currentPage)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [ isOpen, toggleOpen ] = useState(false);
    
    return (
        <Container onClick={() => toggleOpen(!isOpen)}>
            {
                isOpen &&
                <motion.nav
                    initial={{scale: 0, x: -50, y: -80}}
                    animate={{scale: 1}}
                    transition={{duration: 0.6, ease: 'easeInOut'}}
                    exit={{scale: 0}}
                >
                    <Circle 
                        radius={'550px'} 
                        bgColor={colorReference[pager].bgColor} 
                    />
                    <MenuContainer>
                        <MenuTab
                            initial={initialProps}
                            animate={animateProps}
                            transition={{ delay: 0.4 }}
                        >
                            <HoverLink to="/" hoverColor={colorReference[pager].hoverColor}>
                                WHAT IS IT
                            </HoverLink>
                        </MenuTab>
                        <MenuTab
                            initial={initialProps}
                            animate={animateProps}
                            transition={{ delay: 0.6 }}
                        >
                            <HoverLink to="/?scroll=perks" hoverColor={colorReference[pager].hoverColor}>
                                PERKS
                            </HoverLink>
                        </MenuTab>
                        <MenuTab
                            initial={initialProps}
                            animate={animateProps}
                            transition={{ delay: 0.8 }}
                        >
                            <HoverLink to="/pricing" hoverColor={colorReference[pager].hoverColor}>
                                PRICING
                            </HoverLink>
                        </MenuTab>
                    </MenuContainer>
                </motion.nav>
            }
            <Hamburger color={ isOpen ? colorReference[pager].hoverColor : 'white' } size={'2rem'} />
            <Title hoverColor={ isOpen ? colorReference[pager].hoverColor : 'white' }>
                EXP | CON
            </Title>
        </Container>
    )
}

const Container = styled.div`
    margin: 4rem;
    position: fixed;
    z-index: 50;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Title = styled.div`
    font-size: 2rem;
    color: ${props => props.hoverColor};
    margin-left: 1.5rem;
    z-index: 10;
`

const Circle = styled.div`
    width: ${props => props.radius};
    height: ${props => props.radius};
    border-radius: ${props => props.radius};
    position: absolute;
    top: -150px;
    left: -150px;
    background-color: ${props => props.bgColor};
`

const MenuContainer = styled.div`
    position: absolute;
    top: 8rem;
    left: 4rem;
`

const MenuTab = styled(motion.div)`
    min-width: 300px;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 4.7px;
    margin-bottom: 0.5rem;
`

const HoverLink = styled(Link)`
    color: white;
    transition: .2s linear;
    &:hover{
        color: ${props => props.hoverColor};
    }
`

export default Menu;