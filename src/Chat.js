/* eslint-disable no-unused-vars */
import { Avatar, IconButton } from "@material-ui/core";
import {
    AttachFile,
    InsertEmoticon,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    const sendMessage = (e) => {
        //Send message functionality
        e.prevertDefault();
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <div className="chat-headerinfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat-headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                <p className={`chat-message ${true && `chat-reciever`}`}>
                    <span className="chat-name">Kiran</span>
                    Hey guys..
                    <span className="timestamp">time</span>
                </p>
            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form action="#">
                    <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="enter a message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={sendMessage} type="submit">
                        Send
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;
