import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";

function SidebarChat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    return (
        <div className="SidebarChat">
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className="sidebarChat-info">
                <h2>RoomName</h2>
                <p>last message...</p>
            </div>
        </div>
    );
}

export default SidebarChat;
