import { requestUserInfo, requestAddFriend } from "./BackdoorHelp";
import { useState } from "react"

export const Follow = ({token, author}) => {
    const [friendId, setFriendId] = useState(null)

const handleClick = () => {
    requestUserInfo(token, author)
        .then((res) => {setFriendId(res.data[0].id); 
            friendId && (requestAddFriend(token, friendId))})
}

return <div><svg onClick={handleClick} className="is-clickable" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17.841 15.659l.176.177.178-.177a2.25 2.25 0 0 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 0 1 3.182-3.182zM12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996L12 14zm0-13c3.315 0 6 2.685 6 6a5.998 5.998 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a5.998 5.998 0 0 1 5.775-5.996L12 1zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></svg></div>


}