function MusicalNote( props ){

    const { 
        color,
        size
    } = props;
    //https://react-icons.github.io/react-icons/search?q=note
    
    return (
        <svg stroke="currentColor" fill={color} strokeWidth="0" viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z">
            </path>
        </svg>
    )
}

export default MusicalNote;