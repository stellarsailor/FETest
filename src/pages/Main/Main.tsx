import { useEffect } from "react";
import GetNow from "../../components/GetNow";
import Hero from "../../components/Hero/index";
import Menu from "../../components/Menu/Menu";
import PerksContent from "../../components/Perks";
import Red from "../../components/Red/Red";
import ReviewsContent from "../../components/Reviews";
import Yellow from "../../components/Yellow/Yellow";
import { useLocation } from "react-router-dom"

export type MainProps = {}

function Main({}: MainProps){

    let { search } = useLocation()

    useEffect(() => {
        if(search === '') {
            window.scrollTo(0, 0)
        } else {
            const h = window.innerHeight
            window.scrollTo({
                top: h * 3,
                behavior: 'smooth',
            });
        }
    },[search])

    return (
        <>
            <Menu />
            <Hero />
            <Red />
            <Yellow />
            <PerksContent colorful />
            <ReviewsContent
            />
            <GetNow />
        </>
    )
}

export default Main;