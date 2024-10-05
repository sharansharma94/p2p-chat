import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateServer = () => {
   const [serverName, setServerName ] = useState("");
    const navigate = useNavigate();

    
    const handleCreateServer = () => {
        // logic to create the server 

        
        console.log("Create Server");
        navigate("/chat");
    };
    

    return (
        <div>
            <input type="text" value={serverName} onChange={(e) => setServerName(e.target.value)} />
            <button onClick={handleCreateServer}>Create Server</button>
        </div>
    )

}

export default CreateServer;