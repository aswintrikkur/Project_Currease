import React, { useEffect, useState } from "react";
import "./ProductPage.scss";
import { NavBar } from "../../components/NavBar/NavBar";
import { SecondaryTiltle } from "../../components/title/Tiltle";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProductPage = () => {
	const [productDetails, setProductDetails] = useState({});
	const params = useParams();
	const { productList } = useSelector((state) => state.products);

    const navigate = useNavigate()
	console.log(params, "=========params");

	useEffect(() => {
		productList.filter((data, index) => {
			if (data.id == params.id) {
				setProductDetails(data);
			}
		});
	}, []);
	console.log(productDetails);

	return (
		<div className="product-page-container">
			<NavBar />
			<button onClick={()=>navigate('/shop')} > Back to products</button>
			<div className="main-section">
				<div className="left-section">
					<div className="img-container">
						<img src={productDetails.image} alt="" />
					</div>
				</div>
				<div className="right-section">
					<SecondaryTiltle> New</SecondaryTiltle>
					<h2>{productDetails?.title}</h2>
					<h2>
						<span>Description: </span> {productDetails?.description}
					</h2>
					<h2>{productDetails?.category}</h2>
					<h2>{productDetails?.price}</h2>
				</div>
			</div>
		</div>
	);
};
