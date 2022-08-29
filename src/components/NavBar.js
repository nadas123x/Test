import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/ocp.png';
import navIcon1 from '../assets/img/tel.png';
import { Link, useHistory } from 'react-router-dom';

import navIcon2 from '../assets/img/59439.png';
import navIcon3 from '../assets/img/ins.png';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
        <a href="#"><img src={logo} alt="" /></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
            <Nav.Link href="/offres" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Offres</Nav.Link>
            <Nav.Link href="/Search" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Candidature spontanée</Nav.Link>
            <Nav.Link href="/login" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Connectez-vous</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <Link to="/Contact"> <img src={navIcon1} alt="" /></Link> 
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
