import React, { useState } from "react";
import "./CartCard.scss";

export const CartCard = ({ data }) => {
	const [count, setCount] = useState(1);

	return (
		<div className="cart-card-container">
			<div className="left-section">
				<img src={data.image} alt="img" />
			</div>
			<div className="right-section">
				<h3>{data.title}</h3>
				<h4>{data.price}</h4>
				<div className="quantity">
					<button className="count-change">-</button>
					<div className="count">{count}</div>
					<button className="count-change">+</button>
				</div>
			</div>
		</div>
	);
};
