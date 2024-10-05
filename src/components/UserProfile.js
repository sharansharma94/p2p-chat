import { useState } from "react";

const UserProfile = () => {
    const [username, setUsername] = useState("");
    const handleSave = () => {
        console.log("Save User Profile");
    };
    

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleSave}>Save</button>
        </div>
    )
}

export default UserProfile; 