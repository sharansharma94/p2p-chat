import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinChat = () => {
    
const [connectionFile, setConnectionFile] = useState(null);
const navigate = useNavigate();
const handleFileChange = (e) => {
  const file = e.target.files[0];
  setConnectionFile(file);
};

const handleJoinChat = () => {
    // logic to join the chat
    console.log("Join Chat with file: ", connectionFile);
    navigate("/chat");
};

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleJoinChat}>Join Chat</button> 
    </div>
  );
};

export default JoinChat;