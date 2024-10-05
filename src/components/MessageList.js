const MessageList = ({messages}) => {
  return (
    <div className="message-list">
      {messages.map((message,index) => (
        <div key={message.timestamp} className="message">
          <p>{message.text}</p>
          <small>{message.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
