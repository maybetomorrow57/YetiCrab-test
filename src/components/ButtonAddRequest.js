import React from "react";
import "../styles/ButtonAddRequest.css";
import { useDispatch } from "react-redux";

const ButtonAddRequest = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch({type: "showAddRequest"});
	};

	return (
		<div className="button-add-request"> 
			<button onClick = {handleClick}>
				Добавление заявки
			</button>
		</div>
	);
};

export default ButtonAddRequest;