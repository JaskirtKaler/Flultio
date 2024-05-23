import React, { useState } from 'react';
import './Styles/Main.css';
import ChatInput from './ChatInput';

function Main() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  const handleSignout = () => {
    console.log('signout pressed')
  }

  const addNewChat = () => {
    const newChatId = chats.length + 1; // Or any other logic for unique id
    setChats([...chats, newChatId]);
    setActiveChat(newChatId);
  };

  return (
    <div className="main">
      <div className='chat-threads'>
        <div className='thread-tabs'>
          {chats.map(chatId => (
            <button
              key={chatId}
              onClick={() => setActiveChat(chatId)}
              className={`tab-btn ${activeChat === chatId ? 'active' : ''}`}
            >
                <span>Chat {chatId}</span>
                {/* Where I add Chat SVG icon */}
            </button>
          ))}
        </div>
        <div className='chat-threads-end'>
          <button className='add-chat-btn' onClick={addNewChat}>Add New Chat</button>
          <button className='signout' onClick={handleSignout}>Sign out</button>
        </div>
      </div>
      <div className='chat'>
        <div className='text-containers'>
          {activeChat && <div>Chat data for Chat {activeChat}</div>}
        </div>
        <div className='input-container'>
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default Main;
