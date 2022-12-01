import React, { useEffect, useState } from 'react';
import { requestFriend } from './BackdoorHelp'; 

export const Friends = ({token}) => {
    const [friendList, setFriendList] = useState([])

    useEffect(() => {
        requestFriend(token)
            .then(res => setFriendList(res.data))
    }, [token])


    return (<div>
        <h1 className="page-title title is-4 has-text-centered">Friends</h1>
        <div>
            <div className="friends">{friendList.map((friend, idx) => (
                <div key={idx}>
                    <div className="card">
                        <p>{friend.friend}</p>
                    </div>
                </div>
            ))}</div>
        </div>
    </div>
    )
}
