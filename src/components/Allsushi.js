import React from 'react'
export const Allsushi = (props) => {

    return (
        <section>
            <h2>All the Sushi. Yum Yum.</h2>
       
            <div className="card-grid">
                {props.data.map((card) => (
                <div className="card" {card.info.text}>

                </div>
                <div className="cardlist">
                    <h3>by {card.user.author}</h3>
                    <button>Good Sushi!</button>
                </div>
            ))}
            </div>
        </section>
    )
}