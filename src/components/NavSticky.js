import React from 'react';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'; // sidebar menu

import 'bootstrap/dist/css/bootstrap.min.css'
import './NavSticky.css';

const NavSticky = ({ onInputChange, clickSearchButton, hitEnter }) =>{

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
}

	return(
<>
<nav className="navbar fixed-top " id="navbar">
				<div className="header-wrapper">

					{/* header and logo */}
					<div className="header-menu-wrapper">
						<button className="header-menu-button menu" variant="primary" onClick={handleShow}>|||</button>
						<button className="header-account-button account" variant="primary" onClick={handleShow}><i className="fa fa-user" aria-hidden="true"></i></button>
					</div>
				

					<div className="header-logo-wrapper">
						<i className="fa-solid fa-brain header-logo-icon"></i>
						<div className="text-wrapper">
						<h1 className="header-logo-text">mood.io</h1>
						<h2>free to use images <span className="logo-claim">for free creativity</span></h2>
						</div>
					</div>

					<div className="header-search-wrapper">
						<input className="header-search-input" type="search" placeholder="your creativity start here" onChange={onInputChange} onKeyUp={hitEnter}/>
						<button className="header-search-button" variant="primary" onClick={clickSearchButton}>
							<i className="fas fa-search"></i>
							<span className="button-text">search</span>
						</button>
					</div>


					{/* hidden menu - offcanvas*/}
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>Create Your MoodBoard</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<p>
							Search the images for your moodboard.<br />
							Chose the one you like and save the collection in your personal Board.<br/>
							All images are royalty free and can be used for both personal or commercial use.
							</p>						
						</Offcanvas.Body>
					</Offcanvas>

				</div>
</nav>

</>
	)
}

export default NavSticky;