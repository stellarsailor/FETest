function Hamburger( props ){

    const { 
        color,
        size
    } = props;
    //https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg 
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32" width={size} height={size} style={{zIndex: 10}} >
            <g fill={color}>
                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
            </g>
        </svg>
    )
}

export default Hamburger;