/* eslint-disable react/prop-types */
import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import db from "./firebase";
import { Link } from "react-router-dom";

const SidebarChat = ({ id, name, present }) => {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    useEffect(() => {
        if (id) {
            db.collection("Rooms")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [id]);

    const createChat = () => {
        const roomName = prompt("Please create the roomname: ");
        if (roomName) {
            // do some clever stuff in the database...
            db.collection("Rooms")
                .add({ name: roomName })
                .then((res) => console.log(res));
        }
    };

    return !present ? (
        <Link to={`/rooms/${id}`}>
            <div className="SidebarChat">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <div className="sidebarChat-info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="SidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    );
};

export default SidebarChat;
