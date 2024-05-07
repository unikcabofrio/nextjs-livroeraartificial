export default function Wave(props){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} className={`waves ${props.className ? props.className : ''}`}>
            <path 
                fill={props.fill}
                fillOpacity="1" 
                d={props.d}
            ></path>
        </svg>
    )
}