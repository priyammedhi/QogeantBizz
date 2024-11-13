import React, { useState } from 'react';

const WhatsappCnt = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        left: '20px',
        bottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div
          style={{
            marginBottom: '10px',
            padding: '5px 10px',
            backgroundColor: '#333',
            color: 'white',
            borderRadius: '5px',
            fontSize: '12px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          24/7 Support
        </div>
      )}
      <a
        href="https://wa.me/9706086345" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.12.55 4.2 1.6 6.04L0 24l5.96-1.6A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 19c-1.93 0-3.86-.56-5.52-1.6l-.4-.24-3.32.88.88-3.32-.24-.4A10.47 10.47 0 0 1 2 12c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.4 1.1 7.36 3.06C21.9 7.59 23 10.2 23 13c0 5.79-4.71 10.5-10.5 10.5zM15 14.22c-.2-.1-1.1-.54-1.26-.6-.15-.06-.27-.1-.39.1-.12.2-.46.67-.56.8-.1.13-.2.14-.37.05-.2-.1-.83-.3-1.58-.94-.58-.53-.97-1.18-1.08-1.37-.12-.2-.02-.3.07-.4.08-.08.2-.2.29-.3.1-.1.13-.2.2-.34.06-.13.03-.25-.02-.36-.05-.1-.48-1.12-.66-1.54-.18-.42-.36-.36-.49-.37-.12-.01-.26-.01-.39-.01-.13 0-.34.05-.52.23-.17.18-.67.7-.67 1.71 0 1.01.67 1.85.76 1.98.1.13 1.33 2.02 3.22 2.83.45.2.8.32 1.08.41.45.14.87.12 1.2.07.37-.06 1.17-.48 1.34-.94.16-.46.16-.85.1-.94-.06-.08-.19-.12-.4-.21z"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsappCnt;
