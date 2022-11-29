import { Roll } from './roll'; 


export const Allsushi = (props) => {

    return (
        <section>
            <h2 className="rotten-sushi">All the Sushi. Yum Yum.</h2>
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