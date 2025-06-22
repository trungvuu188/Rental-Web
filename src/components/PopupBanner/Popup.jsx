import React, { useState } from 'react';
import './Popup.css';

import popupImg from '../../assets/newsletter-popup.jpg';
import insta7 from '../../assets/Instagram/IMG_9477.JPG';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(localStorage.getItem('userRole') === 'user' || false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  return (
    showPopup ? (
      <div className='popup-overlay'>
        <div className={`popup-content ${fadeOut ? 'fade-out' : ''}`}>
          <button className='close-button' onClick={handleClose}>
            ×
          </button>
          <div className='popup-left'>
            <img src={insta7} alt='Newsletter' />
          </div>
          <div className='popup-right'>
            <h2>Sign Up to Our Newsletter</h2>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form onSubmit={handleClose}>
              <input type='email' placeholder='Your email address' required />
              <button type='submit'>JOIN</button>
            </form>
          </div>
        </div>
      </div>
    ) :
    <>
    </>
  );
};

export default Popup;
