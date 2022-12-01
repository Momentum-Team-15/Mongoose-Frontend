import { Roll } from './roll'; 
import { useEffect, useState } from 'react';
import { Delete } from './Delete'; 
import { requestUsersCards } from './BackdoorHelp';

export const MySushi = ({token, username}) => {
    const [cards, SetCards] = useState([])

    useEffect(() => {
        requestUsersCards(token)
            .then(res => SetCards(res.data))
    }, [token])

    return (
        <section>
            <h2 className="rotten-sushi">My Sushi. munch munch.</h2>
            <div className="card-grid">
                {cards.map((roll, idx) => (
                    <div className="roll" key={idx}> 
                        {/* <Roll rollie={rollie} />  */}
                        <Roll token={token} username={username}/>
                        <div className="cardlist">
                            <p>by {roll.user}</p>
                        </div>
                    </div> 
                ))}
            </div>
        </section>
    )
};