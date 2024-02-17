import React from "react";
import './Container.scss'
import { NavBar } from "../NavBar/NavBar";

export const MainContainer = ({ children }) => {
	return (
		<div className="main-container">
			<NavBar />
			{children}
		</div>
	);
};
