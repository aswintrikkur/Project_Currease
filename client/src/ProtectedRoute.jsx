import React from "react";
import { useSelector } from "react-redux";
// import { useAuth } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	//   const { auth } = useAuth();

	const { authStatus } = useSelector((state) => state.auth);
	const username = localStorage.getItem("username");

	console.log(authStatus);

	if (!authStatus ) {
		return <Navigate to="/login" />;
	} else {
	 return	<Outlet />;
	}

	// return <Outlet />;
};

export default ProtectedRoute;
