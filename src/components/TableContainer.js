import React from "react";
import "../styles/TableContainer.css";
import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "./Table";
import CorrectRequest from "./СorrectRequest";
import deleteRequest from "../actions/deleteRequest";
import correctedRequest from "../actions/correctedRequest";
import showRequestDetails from "../actions/showRequestDetails";
import sortRequests from "../actions/sortRequests";

const TableContainer = () => {
	let requests = useSelector(state => state.requests);
	const searchValue = useSelector(state => state.searchValue);
	const sortField = useSelector(state => state.sortField);
	const sortType = useSelector(state => state.sortType);
	const [rowCorrect, setRowCorrect] = useState(null);
	const dispatch = useDispatch();

	const handleDeleteRequest = (requestNumberDelete) => {
		if (!window.confirm("Вы точно хотите удалить заявку?")) {
			return;
		}
		dispatch(deleteRequest(requestNumberDelete));
	};
	//функция для внесения изменений в заявку
	const handleRowCorrect = (name, value) => {
		if (name === "codeATI") {
			value = parseInt(value);
		}
		setRowCorrect(rowCorrect => ({...rowCorrect, [name]: value}));
	};
	//функция для отправки внесеных изменений в стор
	const handleSubmitCorrect = () => {
		if (!window.confirm("Вы точно хотите внести изменения в заявку?")) {
			return;
		}
		dispatch(correctedRequest(rowCorrect));
		setRowCorrect(null);		
	};

	const handleShowRequestDetails = (request) => {
		dispatch(showRequestDetails(request));
	};
	
	const handleSort = (sortField) => {
		dispatch(sortRequests(sortField));
	};

	if (searchValue !== "") {
		requests = requests.filter(request => request.requestNumber.toString() === searchValue);
	}

	if (requests.length === 0) {
		return (
			<div className = "find-nothing">
				По вашему запросу ничего не найдено...
			</div>
		);
	}
	
	return (
		<div className="table-container">
			<CorrectRequest 
				rowCorrect = {rowCorrect}
				setRowCorrect = {setRowCorrect} 
				handleRowCorrect = {handleRowCorrect} 
				handleSubmitCorrect = {handleSubmitCorrect} />
			<Table 
				requests = {requests}
				sortField = {sortField}
				sortType = {sortType} 
				handleDeleteRequest = {handleDeleteRequest} 
				setRowCorrect = {setRowCorrect} 
				handleShowRequestDetails = {handleShowRequestDetails} 
				handleSort ={handleSort} />
		</div>
	);
};

export default TableContainer;
