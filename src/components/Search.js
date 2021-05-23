import React from "react";
import "../styles/Search.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import searchRequest from "../actions/searchRequest";

const Search = () => {
	const [searchValue, setSearchValue] = useState("");
	const dispatch = useDispatch();

	const handleChange = e => {
		setSearchValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(searchRequest(searchValue));
	};
	
	return (
		<div className="search">
			<form onSubmit = {handleSubmit}>
				<input 
					type = "number"
					name = "value"
					placeholder = "Введите номер заявки"
					value = {searchValue} 
					onChange= {handleChange} />
				<button>Поиск</button>
			</form>			
		</div>
	);
};

export default Search;
