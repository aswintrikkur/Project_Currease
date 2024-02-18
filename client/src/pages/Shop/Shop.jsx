import React, { useState } from "react";
import "./Shop.scss";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { Tiltle } from "../../components/title/Tiltle";
import { InputDropDown } from "../../components/Input/InputDropDown";
import { MainContainer } from "../../components/container/Container";
import { NavBar } from "../../components/NavBar/NavBar";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { Footer } from "../../components/footer/Footer";

export const Shop = () => {
	const [productCount, setProductCount] = useState(9);
	const [buttonText, setButtonText] = useState("More Products");

	const { productList } = useSelector((state) => state.products);
	console.log(productList);

	const showMoreProducts = () => {
		if (productCount === 9) {
			setProductCount(20);
			setButtonText("Show Less");
		} else {
			setProductCount(9);
			setButtonText("More Products");
		}
	};

	return (
		<div className="shop-container">
			<div className="shop-header">
				<NavBar />
				<Tiltle width="384px" m="20px 0px 40px 0px">
					<span>Products</span> Within Your Province
				</Tiltle>

				<div className="background-imgs">
					<img className="item1" src="images/blur product1.png" alt="" />
					<img className="item2" src="images/blur product2.png" alt="" />
				</div>

				<InputDropDown />
			</div>
			<div className="product-count">
				<h4>showing {productCount} of 20</h4>
			</div>
			<div className="product-list">
				{productList?.slice(0, productCount)?.map((data, index) => (
					<ProductCard data={data} key={data.id} />
				))}
			</div>
			<PrimaryButton text={buttonText} icon={"icons/arrow_white.png"} onClick={showMoreProducts} />

			<div className="like-list">
				<Tiltle width="100" m="100px 0 20px 0">
					You May <span>Also Like</span>{" "}
				</Tiltle>
				<div className="like-product-list">
					{productList?.slice(0, 4)?.map((data, index) => (
						<ProductCard data={data} key={data.id}  />
					))}
				</div>
			</div>

			<div className="logo-big">
				<img src="images/currease logo-big.png" alt="" />
			</div>
            <Footer/>
		</div>
	);
};
