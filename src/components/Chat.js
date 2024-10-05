import { useEffect, useState } from "react";

import useWebRTC from "../hooks/useWebRTC";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import PeerList from "./PeerList";
import FileShare from "./FileShare";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const {dataChannel, sendMessage, peers} = useWebRTC();
    
    useEffect(() => {
        if (dataChannel) {
            dataChannel.onmessage = (event) => {
                const message = JSON.parse(event.data);
                setMessages((prevMessages) => [...prevMessages, message]);
            };
        }
    }, [dataChannel]);
    
    const handleSendMessage = (text) => {
        const message = {text, timestamp: new Date().toISOString()};
        sendMessage(JSON.stringify(message));
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div className="chat-container">
            <PeerList peers={peers} />
            <MessageList messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
            <FileShare />
            <h1>Chat</h1>
        </div>
    )
}

export default Chat;