import { useEffect } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import PerksContent from "../../components/Perks/index"
import PricingContent from "../../components/Pricing/index"

export type PricingProps = {}

function Pricing({}: PricingProps){

    useEffect(() => {
        window.scrollTo(0, 0) //when route changed, go to top
    },[])

    return (
        <>
            <Menu />
            <PricingContent />
            <PerksContent />
        </>
    )
}

export default Pricing;