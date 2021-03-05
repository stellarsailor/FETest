import { useState, useEffect } from "react";
import styled from 'styled-components';
import Speakers from '../assets/images/medium3.png';
import CursorImage from '../assets/images/cursor-click.png';

const useAudio = url => {
    const [ audio ] = useState(new Audio(url));
    const [ playing, setPlaying ] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));

        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [ playing, toggle ] = useAudio(url);

    return (
        <SpeakersImage 
        src={Speakers} 
        onClick={toggle} 
        width="100%" 
        height="100%" 
        alt="speakers" 
        />
    );
};

const SpeakersImage = styled.img`
    cursor: url(${CursorImage}), auto;
`
export default Player;