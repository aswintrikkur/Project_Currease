import React from "react";
import "./Buttons.scss";

export const PrimaryButton = ({ text, icon, onClick }) => {
	return (
		<div className="primary-button">
			<button onClick={onClick}>
				{text}
				<span>
					<img src={icon} alt="" />
				</span>
			</button>
		</div>
	);
};
