import React from "react";
import "./Buttons.scss";

export const PrimaryButton = ({ text, icon, onClick, background,padding }) => {
	return (
		<div className="primary-button">
			<button onClick={onClick} style={{ background, padding }}>
				{text}
				<span>
					<img src={icon} alt="" />
				</span>
			</button>
		</div>
	);
};
