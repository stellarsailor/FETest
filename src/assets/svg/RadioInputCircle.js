function RadioInputCircle( props ){

    const { 
        color,
        size
    } = props;
    //https://www.w3schools.com/graphics/svg_circle.asp
    
    return (
        <svg width={size} height={size}>
            <circle cx={size/2} cy={size/2} r={size/2 - 1} stroke={color === 'white' ? 'black' : color} strokeWidth="1" fill={color} />
        </svg>
    )
}

export default RadioInputCircle;