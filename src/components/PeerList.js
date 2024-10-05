const PeerList = ({peers}) => {
    return (
        <div className="peer-list">
            <h2>Peers</h2>
            {peers.map((peer, index) => (
                <div key={index} className="peer">
                    <p>{peer.id}</p>
                </div>
            ))}
        </div>
    );
};

export default PeerList;