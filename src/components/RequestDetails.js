import React from 'react';
import "../styles/RequestDetails.css";
import { useSelector, useDispatch } from "react-redux";

const RequestDetails = () => {
	const details = useSelector(state => state.requestDetails);
	const dispatch = useDispatch();

	const coverRequestDetails = () => {
		dispatch({type: "coverRequestDetails"});
	};

	if (!details) {
		return null;
	}
	
	return (
		<div className = "request-details">
			<div>
				<p>
					Номер заявки: <b>{details.requestNumber}</b>
				</p>
				<p>
					Дата и время: <b>{`${new Date(details.date).toLocaleDateString()} ${new Date(details.date).toLocaleTimeString()}`}</b>
				</p>
				<p>
					Название фирмы клиента: <b>{details.nameCompany}</b>
				</p>
				<p>
					ФИО перевозчика: <b>{details.nameCarrier}</b>
				</p> 
				<p>
					Номер телефона: <b>{details.phoneCarrier}</b>
				</p>
				<p>
					Комментарии: <b>{details.comments}</b>
				</p> 
				<p>
					ATI код: <b>{details.codeATI}</b>
				</p>
				<button onClick = {coverRequestDetails}>
					Закрыть
				</button>
			</div>
		</div>
	);
};

export default RequestDetails;