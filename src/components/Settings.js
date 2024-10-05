import Notifications from "./Notifications";
import UserProfile from "./UserProfile";

const Settings = () => {
    return (
        <div className="settings">
            <h1>Settings</h1>
            <UserProfile />
            <Notifications />
        </div>
    )
}

export default Settings;