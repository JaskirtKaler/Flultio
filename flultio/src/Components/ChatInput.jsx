import React, { useState } from 'react';
import './Styles/ChatInput.css';

function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Message sent:', message);
    setMessage(''); // Clear the input field
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInput;
