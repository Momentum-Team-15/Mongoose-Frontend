import { Roll } from './roll'; 


export const MySushi = (props) => {

    return (
        <section>
            <h2 className="rotten-sushi">My Sushi. munch munch.</h2>
            <div className="card-grid">
                {props.data.map((roll, idx) => (
                    <div className="roll" key={idx}> 
                        <Roll roll={roll} /> 
                        <div className="cardlist">
                            <p>by {roll.user.author}</p>
                        </div>
                    </div> 
                ))}
            </div>
        </section>
    )
};