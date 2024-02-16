import React from "react";
import './NavBar.scss'



export const NavBar = () => {
	return (
		<div className="navbar-container">
			<div className="logo" >
				<img src="images/currease logo 1.png" alt="logo" />
			</div>
			<ul className="nav-list">
				<li>Home</li>
				<li>About Us</li>
				<li>Contact Us</li>
				<li>
					<button>Shop <img src="icons/Vector_shop.png" alt="" /> </button>
				</li>
			</ul>
		</div>
	);
};
