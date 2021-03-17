import React, {useEffect, useState} from "react"
import "./SidebarChat.css"
import {Avatar} from "@material-ui/core";
function SidebarChar({ addNewChat }) {
    const [seed,setSeed] = useState("");
    useEffect(() => {
        Math.floor(Math.random() * 5000
        )
    },[])

    const createChat = () =>{

    }

    return !addNewChat ?(
        <div className="sidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <div className="sidebarChat_info">
            <h4>Room Name</h4>
              <p>Last message...</p>
          </div>
        </div>
    ) : (
        <div className="sidebarChat" onClick={createChat}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h4>Room Name</h4>
                <p>Last message...</p>
            </div>
        </div>
    )
}
export default SidebarChar;