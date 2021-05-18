/* eslint-disable react/jsx-key */
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
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setroomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection("Rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setroomName(snapshot.data().name);
                });

            db.collection("Rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()));
                });
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    const sendMessage = (e) => {
        //Send message functionality
        e.preventDefault();
        db.collection("Rooms").doc(roomId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            name: user.displayName,
        });
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <div className="chat-headerinfo">
                    <h3>{roomName}</h3>
                    <p>
                        Last seen{" "}
                        {new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()
                        ).toUTCString()}
                    </p>
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
                {messages.map((message) => (
                    <p
                        className={`chat-message ${
                            message.name === user.displayName && `chat-reciever`
                        }`}
                    >
                        <span className="chat-name">
                            {message.name}
                            {console.log(message)}
                        </span>
                        {message.message}
                        <span className="timestamp">
                            {new Date(
                                message.timestamp?.toDate()
                            ).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form action="">
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
