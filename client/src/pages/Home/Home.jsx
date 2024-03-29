import React from "react";
import "./Home.scss";
import { NavBar } from "../../components/NavBar/NavBar";
import { Products } from "../Products/Products";
import { MainContainer } from "../../components/container/Container";
import { Footer } from "../../components/footer/Footer";
import { SecondaryTiltle, Tiltle } from "../../components/title/Tiltle";

export const Home = () => {
	return (
		<div className="homepage-container">
			{/* <NavBar /> */}
			<MainContainer>
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

				<section className="prdouct-container">
					<Products />
				</section>
				<div className="fav-recipe-section">
					<Tiltle>
						<span>Cook</span> With Favourite Recipe.
					</Tiltle>
					<div style={{display:"flex"}}>
						<h4>Yummy Duck Roast</h4>

						<SecondaryTiltle p="0 5px" m="0 15px" >Next recipe</SecondaryTiltle>
					</div>
					<img src="/images/fav recipe.svg" alt="" />
				</div>
				<div className="logo-container">
					<img src="/images/currease logo-big.png" alt="logo" />
				</div>
			</MainContainer>
		</div>
	);
};
