import React from "react";
import "./NavBar.scss";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../buttons/Buttons";

export const NavBar = () => {
	const navigate = useNavigate();

	return (
		<div className="navbar-container">
			<div className="logo" onClick={() => navigate("/")}>
				<img src="/images/currease logo 1.png" alt="logo" />
			</div>
			<ul className="nav-list">
				<li onClick={() => navigate("/")}>Home</li>
				<li onClick={() => navigate("/about")}>About Us</li>
				<li onClick={() => navigate("/contact")}>Contact Us</li>
				<li>
					<PrimaryButton text="Shop" icon="/icons/Vector_shop.png" onClick={() => navigate("/shop")} />
				</li>
				<li><PrimaryButton background="#198dff" text="Cart"  icon="/icons/icon cart.png" 
					onClick={() => navigate("/cart")}/> </li>
			</ul>
		</div>
	);
};
