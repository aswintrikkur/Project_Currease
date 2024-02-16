import React from "react";
import "./InputDropDown.scss";

export const InputDropDown = () => {
	return (
		<div className="input-container">
			<select name="province" id="province">
				<option value="">select Province</option>
				<option value="Ontario">Ontario</option>
				<option value="Kitchner">Kitchner</option>
				<option value="Alberta">Alberta</option>
				<option value="Nova">Nova</option>
			</select>
		</div>
	);
};
