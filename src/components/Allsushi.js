import { Roll } from './roll'; 
import { FollowUser } from './FollowUser';
import { useState, useEffect } from 'react'; 
import { requestCards } from './BackdoorHelp'; 


export const Allsushi = ({token}) => {
    const [rollie, setRollie] = useState([]) 
        useEffect(() => {
            requestCards(token)
            .then(res => setRollie(res.data))
        }, [token])
        console.log(rollie) 

    return (
        <div> 
            <h2>All the sushi. yum yum.</h2> 
             {rollie.map((roller) =>(
                <div>
                    <Roll 
                    token={token} roller={roller}/>
                </div>  
            )  )} 
        <FollowUser />
        </div> 
    )


}