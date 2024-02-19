import React, { useState } from "react";
import "./Login.scss";
import { Tiltle } from "../../components/title/Tiltle";
import { Input } from "../../components/Input/Input";
import { PrimaryButton } from "../../components/buttons/Buttons";
import { MainContainer } from "../../components/container/Container";
import { useInput } from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { updateAuthStatus } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const [userData, setUserData] = useState({ username: "", password: "" });
	const { handleChangeInput } = useInput();
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleUserLogin = () => {
		if (userData.username === "aswinkumar" && userData.password === "konceptlabs") {
			localStorage.setItem("username", userData.username);
			dispatch(updateAuthStatus(true));
			navigate('/cart');
			// return;
		}
		// dispatch(updateAuthStatus(false));
	};

	console.log(userData);

	return (
		<MainContainer>
			<div className="login-container">
				<Tiltle> Log In </Tiltle>
				<br />
				<Input
					placeholder="Username"
					type="text"
					name="username"
					onChange={(event) => handleChangeInput(event, setUserData)}
				/>
				<Input
					placeholder="Password"
					type="password"
					name="password"
					onChange={(event) => handleChangeInput(event, setUserData)}
				/>
				<PrimaryButton text="Submit" padding="20px 100px" onClick={handleUserLogin} />
			</div>
			<div className="sample-user">
				<h4>username: <span>aswinkumar</span></h4>
				<h4>password: <span> konceptlabs</span></h4>
			</div>
		</MainContainer>
	);
};
