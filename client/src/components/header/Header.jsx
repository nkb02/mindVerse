// import React from 'react';
import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MindCanvas</span>
        <span className="headerTitleLg">Blog App</span>
      </div>
      <img
        className="headerImg"
        src={process.env.PUBLIC_URL + '/Varanasi.jpg'}
        alt=""
      />
    </div>
  );
}
