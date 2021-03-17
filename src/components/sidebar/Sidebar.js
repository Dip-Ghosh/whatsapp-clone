import React from "react";
import "./Sidebar.css";

import {Avatar, IconButton} from "@material-ui/core";
import {Chat, DonutLarge, MoreVert, SearchOutlined} from "@material-ui/icons";
import SidebarChar from "./SidebarChat";


function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <input placeholder="Search or Start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChar addNewChat/>
                <SidebarChar/>
                <SidebarChar/>
                <SidebarChar/>
            </div>
        </div>
    )

}

export default Sidebar;