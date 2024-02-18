import React from "react";
import "./Footer.scss";
import { SecondaryTiltle } from "../title/Tiltle";

export const Footer = () => {
	return (
		<div className="footer-container">
			<div>
				<h4 className="title1">Customer Support</h4>
				<h4 className="title2"> +1 65695 545 65</h4>
				<h4 className="title2"> support@cantaricorp.com</h4>
			</div>

			<div className="btn-container">
				<SecondaryTiltle>Home</SecondaryTiltle>
				<SecondaryTiltle>About Us</SecondaryTiltle>
				<SecondaryTiltle>Contact Us</SecondaryTiltle>
				<SecondaryTiltle>Shop</SecondaryTiltle>
			</div>

			<div className="bottom-row">
				<h4 className="title3">© 2023 Cantari Corp.</h4>
				<div className="section-center">
					<h4 className="title3">Terms of Service</h4>
					<h4 className="title3">Privacy Policy</h4>
				</div>
				<div className="social-media">
					<img src="/icons/icon fb.png" alt="fb" />
					<img src="/icons/icon linkedin.png" alt="linkedin" />
					<img src="/icons/icon twitter.png" alt="twitter" />
					<img src="/icons/icon insta.png" alt="insta" />
				</div>
			</div>
		</div>
	);
};
