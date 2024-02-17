import React from "react";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ data }) => {
	const navigate = useNavigate();

	return (
		<div className="product-card-container" onClick={() => navigate(`/productPage/${data?.id}`)} >
			<div className="img-container">
				<img src={data.image} alt="" />
			</div>
			<h4 className="title"> {data.title}</h4>
			<div className="bottom-row">
				<div className="price"> {data.price} </div>
				<button>
					{" "}
					<img src="icons/arrow_blue.png" alt="" />{" "}
				</button>
			</div>
		</div>
	);
};
