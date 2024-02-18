import React, { useEffect, useState } from "react";
import "./ProductPage.scss";
import { SecondaryTiltle } from "../../components/title/Tiltle";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../../components/NavBar/NavBar";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { addToCart } from "../../redux/features/productsSlice";

export const ProductPage = () => {
	const [productDetails, setProductDetails] = useState({});
	const params = useParams();
	const dispatch = useDispatch();
	const { productList } = useSelector((state) => state.products);

	const navigate = useNavigate();
	console.log(params, "=========params");

	useEffect(() => {
		productList.filter((data, index) => {
			if (data.id == params.id) {
				setProductDetails(data);
			}
		});
	}, []);
	// console.log(productDetails);

	return (
		<div className="product-page-container">
			<NavBar />
			<div className="back-btn">
				<button onClick={() => navigate("/shop")}>
					<span>
						<img src="/icons/regular arrow left.png" alt="$arrow" />
					</span>
					Back to Products
				</button>
			</div>

			<div className="main-section">
				<div className="left-section">
					<div className="img-container">
						<img src={productDetails.image} alt="" />
					</div>
				</div>
				<div className="right-section">
					<SecondaryTiltle> New</SecondaryTiltle>
					<h2 className="title">{productDetails?.title}</h2>
					<div className="description">
						<h3>Description: </h3>
						<h4>{productDetails?.description}</h4>
					</div>
					<h2 className="price">{productDetails?.price}</h2>
					
					<div className="buy-now">
						<PrimaryButton
							onClick={() => dispatch(addToCart(productDetails))}
							text="Buy Now"
							icon="/icons/arrow_white.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
