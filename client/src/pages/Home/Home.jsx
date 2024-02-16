import React from "react";
import "./Home.scss";
import { NavBar } from "../../components/NavBar/NavBar";
import { Products } from "../Products/Products";

export const Home = () => {
	return (
		<div className="homepage-container">
			<div className="header">
				<NavBar />
			</div>

			<section>
				<div className="title1">
					<h3>UNIQUE CURRY POWDERS</h3>
				</div>
				<div className="title2">
					<h1>
						Wake Up Your
						<span>
							<img src="icons/Frame emoji.png" alt="" />
						</span>
						Taste Buds With U
					</h1>
				</div>
				<div className="banner">
					<div className="gradient-outer">
						<div className="gradient"></div>
					</div>
					<div className="product1">
						<img src="images/Frame product_1.png" alt="#product1" />
					</div>
					<div className="product2">
						<img src="images/frame product_2.png" alt="#product2" />
					</div>
					<div className="brands">
						<img src="images/Frame brands.svg" alt="" />
					</div>
				</div>
			</section>

			<section>
				<Products />
			</section>
		</div>
	);
};
