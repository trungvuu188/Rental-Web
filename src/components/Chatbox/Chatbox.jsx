import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const Chatbox = () => {
//   const navigate = useNavigate();

  const handleChatClick = () => {
    // navigate('/messenger');
  };

  return (
    <div className="chatbox-container" onClick={handleChatClick}>
      <svg
        className="chatbox-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        <path d="M11.2 8.5l-2.6 2.6-1.1-1.1-1.4 1.4 2.5 2.5 4-4z"/>
      </svg>
    </div>
  );
};

export default Chatbox;