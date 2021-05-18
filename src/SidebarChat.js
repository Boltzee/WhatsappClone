/* eslint-disable react/prop-types */
import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";

const SidebarChat = ({ present }) => {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please create the roomname: ");
        if (roomName) {
            // do some clever stuff in the database...
        }
    };

    return !present ? (
        <div className="SidebarChat">
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className="sidebarChat-info">
                <h2>name</h2>
                <p>message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="SidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    );
};

export default SidebarChat;
