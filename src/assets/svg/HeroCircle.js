function HeroCircle( props ){

    const { 
        selected,
        size,
        onClick
    } = props;
    //https://www.w3schools.com/graphics/svg_circle.asp
    
    return (
        <svg width={size} height={size} style={{marginRight: '1rem', cursor: 'pointer'}} onClick={onClick}>
            <circle cx={size/2} cy={size/2} r={size/2 - 1} stroke={'white'} strokeWidth="1" fill={selected ? 'white' : 'rgba(0,0,0,0)' } />
        </svg>
    )
}

export default HeroCircle;