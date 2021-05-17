import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat.js";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar />
                <div className="sidebar-headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="search-container">
                    <SearchOutlined />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search or start new chat"
                    />
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;
