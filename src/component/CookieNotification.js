import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CookieNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAgree = () => {
    // Hide the notification when the user clicks "Agree"
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-notification">
      <p>
        We use cookies to ensure that we give you the best experience on our website.
        If you continue to use this site we will assume that you agree to our
        <Link to="/Privacy-policy" target='_blank'> privacy policy.</Link>
      </p>
      <button onClick={handleAgree}>Agree</button>
    </div>
  );
};

export default CookieNotification;
