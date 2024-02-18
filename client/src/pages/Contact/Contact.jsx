import React from "react";
import "./Contact.scss";
import { NavBar } from "../../components/NavBar/NavBar";
import { Tiltle } from "../../components/title/Tiltle";
import { Input } from "../../components/Input/Input";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { Footer } from "../../components/footer/Footer";
import { MainContainer } from "../../components/container/Container";

export const Contact = () => {
	return (
		<MainContainer>
			<div className="contact-container">
				<div className="cards-container">
					<ContactCard t1="Cantari Corp India" t2="+91 95232 12121" t3="supportind@gmail.com" />
					<ContactCard t1="Cantari Corp UK" t2="+44 35232 8910" t3="supportuk@gmail.com" />
					<ContactCard t1="Cantari Corp USA" t2="+1 35232 1200" t3="supportusa@gmail.com" />
				</div>
				<Tiltle> Send us a message</Tiltle>
				<div className="message-form-container">
					<Input placeholder="Your Name" type="text" />
					<Input placeholder="Phone Number" type="number" />
					<Input placeholder="Email" type="email" />
					<Input placeholder="Message" type="text" />
				</div>
				<PrimaryButton text="Send Message" icon="/icons/arrow_white.png" padding="30px 40px" />
				<div className="logo-container">
					<img src="/images/currease logo-big.png" alt="logo" />
				</div>
			</div>
		</MainContainer>
	);
};

export const ContactCard = ({ t1, t2, t3 }) => {
	return (
		<div className="contact-card-container">
			<h4 className="title1">{t1} </h4>
			<h3 className="title2">{t2} </h3>
			<h3 className="title3">{t3} </h3>
		</div>
	);
};
