/* eslint-disable no-unused-vars */
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection("Rooms").onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

        return () => {
            unsubscribe();
        };
    }, []);
    console.dir(user);
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={!user ? "" : user.photoURL} />
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
                <SidebarChat present />
                {rooms.map((room) => (
                    <SidebarChat
                        key={room.id}
                        id={room.id}
                        name={room.data.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
