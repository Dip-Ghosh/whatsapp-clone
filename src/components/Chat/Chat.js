import React, {useEffect, useState} from 'react'
import "./Chat.css"
import {Avatar, IconButton} from "@material-ui/core";
import {
    AttachFile,
    MicIcon,
    InsertEmoticon,
    MoreVert,
    SearchOutlined,
    VoiceChat,
    SettingsVoice
} from "@material-ui/icons";


function Chat(){
    const [seed,setSeed] = useState("");
    useEffect(() => {
        Math.floor(Math.random() * 5000
        )
    },[])
   return (
       <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_header_info">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>

            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_receiver"}`}>
                    <span className="chat_name">Shony </span>
                    hey Guys
                    <span className="chat_timestamp">3.52pm</span>
                </p>

            </div>
            <div className="chat_footer">
                <InsertEmoticon/>
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button>Send a message</button>
                </form>
             <SettingsVoice/>
            </div>

       </div>
   )
}
export default Chat;