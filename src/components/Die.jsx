export default function Die(props) {
    return(
        <>
            <button 
            className={props.isHeld ? "held-die" : "unheld-die"}
            onClick={props.onClick}
            >
                {props.value}
                {props.isHeld}
            </button>
        </>
    )
}