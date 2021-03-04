
function Mail( props ){

    const { 
        color,
        size
    } = props;
    //https://react-icons.github.io/react-icons/search?q=mail
    
    return (
        <svg stroke="currentColor" fill={color} stroke-width="0" viewBox="0 0 512 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z">
            </path>
        </svg>
    )
}

export default Mail;