import { useState } from "react";

const Notifications = () => {
    const [enabled , setEnabled] = useState(false);
    
    const handleToggle = () => {
        setEnabled(!enabled);
    };
    
    return (
        <div className="notifications">
            <h1>Notifications</h1>
            <label>
                <input type="checkbox" checked={enabled} onChange={handleToggle} />
                Enable Notifications
            </label>
        </div>
    )
}   

export default Notifications;