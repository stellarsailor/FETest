import GetNow from "../../components/GetNow";
import Hero from "../../components/Hero/index";
import Menu from "../../components/Menu/Menu";
import PerksContent from "../../components/Perks";
import Red from "../../components/Red/Red";
import ReviewsContent from "../../components/Reviews";
import Yellow from "../../components/Yellow/Yellow";

export type MainProps = {}

function Main({}: MainProps){

    return (
        <>
            <Menu />
            <Hero />
            <Red />
            <Yellow />
            <PerksContent 
                colorful
                topRightButton
            />
            <ReviewsContent
                topRightButton
            />
            <GetNow />
        </>
    )
}

export default Main;