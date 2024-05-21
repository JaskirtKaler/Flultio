import React from 'react';
import './Styles/ChatNode.css';

function ChatNode({ isActive }) {
  const nodeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: isActive ? '#2DB3E6' : 'rgba(45, 179, 230, 0.5)', // blue when active, faded when inactive
    color: 'white', // text color
    border: 'none', // remove border
    cursor: 'pointer', // change cursor to pointer on hover
  };

  return (
    <button style={nodeStyle} onClick={() => console.log('ChatNode clicked')}>
      {isActive ? 'Active ChatNode' : 'Inactive ChatNode'}
    </button>
  );
}

export default ChatNode;
