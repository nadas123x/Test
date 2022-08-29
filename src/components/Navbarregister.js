import React from 'react'
import AuthService from "../services/auth.service";
import { useState, useEffect } from "react";
import './Login.css';

import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/tel.png';
import { Link, useHistory } from 'react-router-dom';

import navIcon2 from '../assets/img/59439.png';
import navIcon3 from '../assets/img/ins.png';



function Navbarregister() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
  
    useEffect(() => {
      const user = AuthService.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
        console.log(user);
        setShowModeratorBoard(user.role.includes("ROLE_MODERATOR"));
        setShowAdminBoard(user.role.includes("ROLE_ADMIN"));
      }
    }, []);
  
    const logOut = () => {
      AuthService.logout();
    };
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
    <Link to={"/"} className="navbar-brand">
    <img className="imgnavbar" src={require('../assets/img/ocpcopy.png')} />

    </Link>
    <div className="navbar-nav mr-auto">
      <li className="nav-item">
        
        <Link to={"/"} className="ms-auto">
          Accueil
        </Link>
      </li>

      {showModeratorBoard && (
        <li className="nav-item">
          <Link to={"/mod"} className="nav-link">
            Moderator Board
          </Link>
        </li>
      )}

      {showAdminBoard && (
        <li className="nav-item">
          <Link to={"/admin"} className="nav-link">
            Admin Board
          </Link>
        </li>
      )}

      {currentUser && (
        <li className="nav-item">
          <Link to={"/profill"} className="nav-link">
          Mon Profil
          </Link>
        </li>
      )}
    </div>

    {currentUser ? (
      <div className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={"/profile"} className="nav-link">
            {currentUser.username}
          </Link>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link" onClick={logOut}>
            LogOut
          </a>
        </li>
      </div>
    ) : (
      <div className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={"/loginn"} className="nav-link">
            Connectez-vous
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/register"} className="nav-link">
           S'inscrire
          </Link>
        </li>
       
      

      </div>
      
    )}
  </nav>
)
}

export default Navbarregister