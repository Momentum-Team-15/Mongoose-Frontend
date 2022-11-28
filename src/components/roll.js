export const Roll = (props) => {

    return (
        <div className="flip-card">
            <div className="flipping-card">
                <div className="card-front" style={{
                    borderWidth: props.roll.style.border_width,
                    borderStyle: props.roll.style.border_style,
                    borderColor: props.roll.style.border_color,
                    backgroundColor: props.roll.style.background
                }}>
                    <p className="title" style={{
                        color: props.roll.style.text_color
                    }}>Sushi Rolls</p>
                </div>
                <div className="card-back" style={{
                    backgroundColor: props.roll.style.background,
                    color: props.roll.style.text_color
                }}>
                    <p>{props.roll.info.text}</p>
                </div>
            </div>
        </div>
    )
}