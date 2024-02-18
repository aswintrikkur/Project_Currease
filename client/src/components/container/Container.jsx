import React from "react";
import './Container.scss'
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../footer/Footer";

export const MainContainer = ({ children }) => {
	return (
		<div className="main-container">
			<NavBar />
			{children}
			<Footer/>
		</div>
	);
};
