import React, { useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import { InputDropDown } from "../../components/Input/InputDropDown";
import { ProductCard } from "../../components/products/ProductCard/ProductCard";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productsSlice";
import { Tiltle } from "../../components/title/Tiltle";
import { Footer } from "../../components/footer/Footer";

export const Products = () => {
	const [products, setProducts] = useState([]);
	const [productCount, setProductCount] = useState(4);
	const [buttonText, setButtonText] = useState("More Products");

	const dispatch = useDispatch();

	// ------------ fetch products ------------
	const fetchProducts = async () => {
		try {
			const response = await axios("https://fakestoreapi.com/products");
			dispatch(getProducts(response.data));
			setProducts(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const showMoreProducts = () => {
		if (productCount === 4) {
			setProductCount(20);
			setButtonText("Show Less");
		} else {
			setProductCount(4);
			setButtonText("More Products");
		}
	};

	return (
		<div className="products-container">
			<Tiltle m="0px 0 80px 0">
				<span>Products</span> Within Your Province
			</Tiltle>

			<div className="background-imgs">
				<img className="item1" src="images/blur product1.png" alt="" />
				<img className="item2" src="images/blur product2.png" alt="" />
			</div>

			<InputDropDown />

			<div className="product-list">
				{products?.slice(0, productCount)?.map((data) => (
					<ProductCard data={data} key={data.id} />
				))}
			</div>
			<PrimaryButton text={buttonText} icon={"icons/arrow_white.png"} onClick={showMoreProducts} />
			<Footer/>
		</div>
	);
};
