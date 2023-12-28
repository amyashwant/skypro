import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div style={containerStyle}>
        <h1 style={heading1Style}>Opps! Page Not Found!</h1>
        <h3 style={heading3Style}>Looks Like You are Lost</h3>
        <button style={buttonStyle}>
          <Link to='/' style={linkStyle}>
            Back To Home
          </Link>
        </button>
      </div>
    </>
  );
};

// Inline styles
const containerStyle = {
  textAlign: 'center',
  marginTop: '50px',
};

const heading1Style = {
  color: '#ff0000', // Red color
};

const heading3Style = {
  color: '#333', // Dark gray color
};

const linkStyle = {
  color: '#fff', // White color for text
  textDecoration: 'none',
};

const buttonStyle = {
  backgroundColor: '#007bff', // Blue background color
  border: 'none',
  borderRadius: '5px', // Optional: Add border-radius for rounded corners
  padding: '10px 20px',
  fontSize: 'inherit',
  color: '#fff', // White text color
  cursor: 'pointer',
};

export default PageNotFound;
