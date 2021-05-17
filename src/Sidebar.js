import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar />
            </div>
            <div className="sidebar-search"></div>
            <div className="sidebar-chats"></div>
        </div>
    );
}

export default Sidebar;
