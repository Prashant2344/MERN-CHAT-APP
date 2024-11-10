import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
    const [chats,setChats] = useState();
    const fetchChats = async () => {
        const response = await axios.get('/api/chats');
        setChats(response.data);
        console.log(chats);
    }
    useEffect(() => {
        fetchChats();
    },[]);
    return (
        <div>
            {chats && chats.length > 0 ? (chats.map((chat) => {
                return <div>{chat.chatName}</div>
            })
            ) : (
                <p>No chats available</p>
            )}
        </div>
    )
}

export default ChatPage
