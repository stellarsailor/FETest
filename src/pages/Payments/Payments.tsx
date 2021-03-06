import { useEffect } from 'react';
import PaymentsContent from '../../components/Payments/index'

export type PaymentsProps = {}

function Payments({}: PaymentsProps){

    useEffect(() => {
        window.scrollTo(0, 0) //when route changed, go to top
    },[])

    return (
        <>
            <PaymentsContent />
        </>
    )
}

export default Payments;