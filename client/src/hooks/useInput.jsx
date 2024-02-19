import React from "react";

export const useInput = () => {
	const handleChangeInput = (event, setState) => {
		setState((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return { handleChangeInput };
};
