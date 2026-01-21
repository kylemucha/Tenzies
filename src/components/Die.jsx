export default function Die(props) {
    return(
        <>
            <button className="die-shape">
                {props.value}
            </button>
        </>
    )
}