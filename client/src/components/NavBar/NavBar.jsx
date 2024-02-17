import React from "react";
import './NavBar.scss'
import { useNavigate } from "react-router-dom";



export const NavBar = () => {

	const navigate = useNavigate();


	return (
		<div className="navbar-container">
			<div className="logo" onClick={()=>navigate('/')} >
				<img src="/images/currease logo 1.png" alt="logo" />
			</div>
			<ul className="nav-list">
				<li onClick={()=>navigate('/')} >Home</li>
				<li onClick={()=>navigate('/about')} >About Us</li>
				<li onClick={()=>navigate('/contact')} >Contact Us</li>
				<li>
					<button  onClick={()=>navigate('/shop')}>Shop <img src="icons/Vector_shop.png" alt="" /> </button>
				</li>
			</ul>
		</div>
	);
};
