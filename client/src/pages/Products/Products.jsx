import React from "react";
import "./Products.scss";
import { InputDropDown } from "../../components/Input/InputDropDown";

export const Products = () => {
	return (
		<div className="products-container">
			<h2><span>Products</span> Within Your Province</h2>

			<InputDropDown />
		</div>
	);
};
