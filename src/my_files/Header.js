import React from 'react';

const Header = () => {
    // This is not HTML, this is JSX
  return (
    <div className="Header">
      <ul>
        <a href="/">Home</a> -
        <a href="/">News</a> -
        <a href="/">Feed</a> -
        <a href="/">Messages</a>
      </ul>
    </div>
  );
}

export default Header;