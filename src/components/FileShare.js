import useWebRTC from "../hooks/useWebRTC";

const FileShare = () => {
    const { sendFile } = useWebRTC();

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            sendFile(file);
        }
    };
    return (
        <div>
            <h1>File Share</h1>
            <input type="file" onChange={handleFileSelect} />
        </div>
    )
}

export default FileShare;