import React from "react";
import "../styles/CorrectRequest.css";

const СorrectRequest = (props) => {
	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;	
		props.handleRowCorrect(name, value);
	};

	const handleClick = () => {
		props.setRowCorrect(null);
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.handleSubmitCorrect();
	};

	if (!props.rowCorrect) {
		return null;
	}

	return (
		<div className="correct-request">
			<form onSubmit = {handleSubmit}>
				<p>
					<label htmlFor="requestNumber">Номер заявки</label>
					<input 
						id="requestNumber" 
						type="number"
						name="requestNumber" 
						value={props.rowCorrect.requestNumber} 
						disabled = "disabled" />
				</p>
				<p>
					<label htmlFor="date">Дата и время</label>
					<input 
						id="date" 
						name="date" 
						value={`${new Date(props.rowCorrect.date).toLocaleDateString()} ${new Date(props.rowCorrect.date).toLocaleTimeString()}`} 
						disabled = "disabled" />
				</p>				
				<p>
					<label htmlFor="nameCompany">Название фирмы клиента</label>
					<input 
						id="nameCompany" 
						type="text"
						name="nameCompany" 
						value={props.rowCorrect.nameCompany} 
						onChange={handleChange} />
				</p>
				<p>
					<label htmlFor="nameCarrier">ФИО перевозчика</label>
					<input 
						id="nameCarrier"
						type="text" 
						name="nameCarrier" 
						value={props.rowCorrect.nameCarrier}
						onChange={handleChange} />
				</p>
				<p>
					<label htmlFor="phoneCarrier">Номер телефона</label>
					<input 
						id="phoneCarrier" 
						type="number"
						name="phoneCarrier" 
						value={props.rowCorrect.phoneCarrier} 
						onChange={handleChange} />
				</p>
				<p>
					<label htmlFor="comments">Комментарии</label>
					<textarea 
						className="comments"
						id="comments" 
						name="comments" 
						value={props.rowCorrect.comments}
						onChange={handleChange}>
					</textarea>
				</p>
				<p>
					<label htmlFor="codeATI">ATI код</label>
					<input 
						id="codeATI"
						type="number" 
						name="codeATI" 
						value={props.rowCorrect.codeATI}
						onChange={handleChange} />
				</p>
				<button>Внести изменения</button>
				<button onClick = {handleClick}>Отмена</button>
			</form>
		</div>
	);
};

export default СorrectRequest;
