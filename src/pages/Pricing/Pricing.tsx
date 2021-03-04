import styled from 'styled-components';
import PerksContent from "../../components/Perks/index"
import PricingContent from "../../components/Pricing/index"

export type PricingProps = {}

function Pricing({}: PricingProps){

    return (
        <>
            <PricingContent />
            <PerksContent />
        </>
    )
}

export default Pricing;