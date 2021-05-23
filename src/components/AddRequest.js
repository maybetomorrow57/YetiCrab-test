import React from "react";
import "../styles/AddRequest.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import addNewRequest from "../actions/addNewRequest";

const AddRequest = () => {
	const showAddRequest = useSelector(state => state.showAddRequest);
	const [newRequest, setNewRequest] = useState({
		requestNumber: "", 
		nameCompany: "", 
		nameCarrier: "", 
		phoneCarrier: "",
		comments: "",
		codeATI: ""
	});
	const dispatch = useDispatch();

	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		setNewRequest(newRequest => ({...newRequest, [name]: value}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		const request = {
			requestNumber: parseInt(newRequest.requestNumber), 
			date: Date.now(), 
			nameCompany: newRequest.nameCompany, 
			nameCarrier: newRequest.nameCarrier, 
			phoneCarrier: newRequest.phoneCarrier, 
			comments: newRequest.comments, 
			codeATI: parseInt(newRequest.codeATI)
		};
		dispatch(addNewRequest(request));
		setNewRequest({
			requestNumber: "", 
			nameCompany: "", 
			nameCarrier: "", 
			phoneCarrier: "",
			comments: "",
			codeATI: ""	
		});
	};

	const coverAddRequest = () => {
		dispatch({type: "showAddRequest"});
	};
	
	if (!showAddRequest) {
		return null;
	}
	
	return (
		<div className="add-request">
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="requestNumber">Номер заявки<span>*</span></label>
					<input 
						id="requestNumber" 
						type="number"
						name="requestNumber" 
						value={newRequest.requestNumber} 
						onChange={handleChange}
						required="required"/>
				</p>
				<p>
					<label htmlFor="nameCompany">Название фирмы клиента<span>*</span></label>
					<input 
						id="nameCompany" 
						type="text"
						name="nameCompany" 
						value={newRequest.nameCompany} 
						onChange={handleChange}
						required="required"/>
				</p>
				<p>
					<label htmlFor="nameCarrier">ФИО перевозчика<span>*</span></label>
					<input 
						id="nameCarrier"
						type="text" 
						name="nameCarrier" 
						value={newRequest.nameCarrier}
						onChange={handleChange}
						required="required"/>
				</p>
				<p>
					<label htmlFor="phoneCarrier">Номер телефона<span>*</span></label>
					<input 
						id="phoneCarrier" 
						type="number"
						name="phoneCarrier" 
						value={newRequest.phoneCarrier} 
						onChange={handleChange}
						required="required"/>
				</p>
				<p>
					<label htmlFor="comments">Комментарии</label>
					<textarea 
						className="comments"
						id="comments" 
						name="comments" 
						value={newRequest.comments}
						onChange={handleChange}>
					</textarea>
				</p>
				<p>
					<label htmlFor="codeATI">ATI код<span>*</span></label>
					<input 
						id="codeATI"
						type="number" 
						name="codeATI" 
						value={newRequest.codeATI}
						onChange={handleChange}
						required="required"/>
				</p>
				<button>Добавить новую заявку</button>
				<button onClick = {coverAddRequest}>Отмена</button>
			</form>
		</div>
	);
};

export default AddRequest;
