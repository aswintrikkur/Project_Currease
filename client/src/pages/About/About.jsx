import React from "react";
import "./About.scss";
import { MainContainer } from "../../components/container/Container";
import { Tiltle } from "../../components/title/Tiltle";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate()
	return (
		<MainContainer>
			<div className="about-container">
				<div className="section1">
					<img src="/images/Mask group.png" alt="images" />

					<div className="right-section">
						<Tiltle>
							<span>A Novel Product</span> <br /> In The Food Market.{" "}
						</Tiltle>
						<h5>
							As a retorted curry base gravy produced particularly by keeping the millennials in mind,
							“Currease”, unlike other instant alternatives to home-cooked food, ensure to deliver locally
							produced fresh ingredients and easy-to-follow recipes so that anyone can prepare a quality
							home-cooked dish that does not compromise on time and well-being.
						</h5>
						<PrimaryButton text="Products"  icon='/icons/arrow_white.png' onClick={()=>navigate('/shop')} />
					</div>
				</div>
				<div className="section2">
					<div className="video-container">
						<img src="/images/video thumbnail.png" alt="video" />
						<div className="play-btn">
							<img src="/icons/icon play.png" alt="" />
						</div>
					</div>
					<h5>
						All Currease products are manufactured using “retort” technology. Retorting is one of the major
						techniques used for the thermal processing of food products that are packed either in semi-rigid
						flexible laminates or in metal or alloy cans. The technology provides the advantage of processing
						and packing the food together; which makes it more commercially stable with safe and effective
						shelf life.
					</h5>
				</div>

                <img className="logo-big" src="/images/currease logo-big.png" alt="" />
			</div>
		</MainContainer>
	);
};
