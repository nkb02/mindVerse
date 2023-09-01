// import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={process.env.PUBLIC_URL + '/nitish.jpg'}
          alt="Nitish - Creator" className="sidebarImg"
        />
        <p>
          
        As an undergraduate student at the prestigious Indian Institute of Technology (IIT) BHU in Varanasi.
        A Full Stack MERN developer with expertise in Data Structures and Algorithms. As an aspiring software developer engineer, I am passionate about developing innovative solutions that positively impact people’s lives.
        </p>
        <h3>~ Nitish</h3>
        <br/>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.linkedin.com/in/nitish-kumar-266635203/" target="_blank" rel="noopener noreferrer">
          <i className="sidebarIcon fab fa-pinterest-square"></i>   
        </a>

        <a href="https://www.facebook.com/nitishbyahut" target="_blank" rel="noopener noreferrer">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        </a>
        
        <a href="https://twitter.com/nitish_byahut" target="_blank" rel="noopener noreferrer">
          <i className="sidebarIcon fab fa-twitter-square"></i>  
        </a>  
        <a href="https://www.instagram.com/byahut25__/" target="_blank" rel="noopener noreferrer">
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </a>    
       </div>
      </div>
    </div>
  );
}