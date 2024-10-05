import { useCallback, useEffect, useState } from "react";

const configurations = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302",
        },
    ],
};

const useWebRTC = () => {
    const [peerConnection, setPeerConnection] = useState(null);
    const [dataChannel, setDataChannel] = useState(null);
    const [peers, setPeers] = useState([]);

    useEffect(() => {
        const pc = new RTCPeerConnection(configurations);
        setPeerConnection(pc);

        const dc = pc.createDataChannel("chat");
        setDataChannel(dc);

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                console.log("Sending ICE candidate");
            }
        };
        
        pc.ondatachannel = (event) => {
            const recievedChannel = event.channel;
            recievedChannel.onmessage = handleReceiveMessage;
        };
        
        return () => {
            pc.close();
        };
    }, []);

  const handleReceiveMessage = (event) => {
    const message = JSON.parse(event.data);
    console.log("Received message: ", message);
  };
    
  const sendMessage =  useCallback((message) => {
        if (dataChannel && dataChannel.readyState === "open") {
            dataChannel.send(JSON.stringify( message));
        }else{
            console.log("Data Channel is not open");
        }
    }, [dataChannel]);
    
    const createOffer = async () => {
        try{
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);
            return offer;

        }catch(error){
            console.log("Error creating offer: ", error);
        }
    };
    
    const handleAnswer = async (answer) => {
        try{
            await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
        }catch(error){
            console.log("Error handling answer: ", error);
        }
    };

    const addIceCandidate = async (candidate) => {
        try{
            await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        }catch(error){
            console.log("Error adding ICE candidate: ", error);
        }
    };

    
    const sendFile = useCallback((file) => {
        console.log("Sending file: ", file);
    }, []);
    
    return {
        peerConnection,
        dataChannel,
        peers,
        sendMessage,
        createOffer,
        handleAnswer,
        addIceCandidate,
        sendFile,
    };
    }

    export default useWebRTC;