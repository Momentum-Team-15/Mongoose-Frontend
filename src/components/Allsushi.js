import { Roll } from './roll'; 
import { FollowUser } from './FollowUser';
import { useState, useEffect } from 'react'; 
import { requestCards } from './BackdoorHelp'; 
import { Delete } from './Delete'


export const Allsushi = ({token}) => {
    const [rollie, setRollie] = useState([]) 
        useEffect(() => {
            requestCards(token)
            .then(res => setRollie(res.data))
        }, [token])
        /* console.log(rollie) */

    return (
        <section> 
            <h2>All the sushi. yum yum.</h2> 
            <div className='card-grid'>
                {rollie.map((roller) => (
                    <div>
                        <Roll token={token}  roller={roller}/>
                        <div className='card-list'>
                            
                            <div className='flexy'>
                            {roller === Roll.user && (<Delete token={token} />)}
                            <FollowUser />
                            </div>  
                        </div>
                    </div>
                ))} 
            </div>
        </section> 
    )
};