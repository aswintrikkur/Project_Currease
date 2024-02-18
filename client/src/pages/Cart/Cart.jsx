import React from "react";
import "./Cart.scss";
import { NavBar } from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { CartCard } from "../../components/cards/CartCard/CartCard";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { MainContainer } from "../../components/container/Container";

export const Cart = () => {
	const { cartList } = useSelector((state) => state.products);

	return (
		<div className="cart-container">
			<MainContainer>
				<h2>My Cart</h2>
				<div className="main-section">
					<div className="cart-list">
						{cartList?.map((data, index) => (
							<CartCard data={data} key={data.id} />
						))}
					</div>
					<div className="summary">
						<h2>Price Summary</h2>
						<PrimaryButton text="Check Out" />
					</div>
				</div>
			</MainContainer>
		</div>
	);
};
