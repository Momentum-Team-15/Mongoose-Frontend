export const Roll = (props) => {

    return (
        <div className="flop-roll">
            <div className="flopping-roll">
                <div className="roll-front" style={{
                    backgroundColor: props.roller.color
                }}>
                    <p>{props.roller.title}</p>
                    <p>{props.roller.card_msg}</p>
                     {/* <p className="title" style={{
                        color: props.roll.style.text_color
                    }}>Sushi Rolls</p>
                </div>
                <div className="roll-back" style={{
                    backgroundColor: props.roll.style.background,
                    color: props.roll.style.text_color
                }}>
                    <p>{props.roll.info.text}</p> */}
                  
                </div> 
            </div>
        </div>
    )
}