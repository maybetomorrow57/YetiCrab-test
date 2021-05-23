import React from "react";
import "../styles/Table.css";
import VisualSort from "./VisualSort";
import cross from "../styles/images/delete.png";
import loupe from "../styles/images/loupe.png";
import edit from "../styles/images/edit.png";

const Table = (props) => (
	<div className="table"> 
		<table>
			<thead> 
				<tr>
					<th onClick = {() => props.handleSort("requestNumber")}>
						Номер заявки {props.sortField === "requestNumber" ? <VisualSort sortType = {props.sortType} /> : null}
					</th>
					<th onClick = {() => props.handleSort("date")}>
						Дата и время {props.sortField === "date" ? <VisualSort sortType = {props.sortType} /> : null}
					</th>
					<th onClick = {() => props.handleSort("nameCompany")}>
						Название фирмы клиента {props.sortField === "nameCompany" ? <VisualSort sortType = {props.sortType} /> : null}
					</th>
					<th  onClick = {() => props.handleSort("nameCarrier")}>
						ФИО перевозчика {props.sortField === "nameCarrier" ? <VisualSort sortType = {props.sortType} /> : null}
					</th>
					<th  onClick = {() => props.handleSort("phoneCarrier")}>
						Номер телефона {props.sortField === "phoneCarrier" ? <VisualSort sortType = {props.sortType} /> : null}
					</th>
					<th>
						Комментарии
					</th>
					<th onClick = {() => props.handleSort("codeATI")}>
						ATI код {props.sortField === "codeATI" ? <VisualSort sortType = {props.sortType} /> : null}
					</th>
					<th>
						Действия
					</th> 
				</tr>
			</thead>
			<tbody>
				{props.requests.map(request => (
					<tr key = {request.requestNumber}>
						<td>
							{request.requestNumber}
						</td>
						<td>
							{`${new Date(request.date).toLocaleDateString()} ${new Date(request.date).toLocaleTimeString()}`}
						</td>
						<td>
							{request.nameCompany}
						</td>
						<td>
							{request.nameCarrier}
						</td>
						<td>
							{request.phoneCarrier}
						</td>
						<td>
							{request.comments}
						</td>
						<td>
							<a href={`http://ati.su/firms/${request.codeATI}/info`} target="_blank" rel="noreferrer">
								{request.codeATI}
							</a>
						</td>
						<td>
							<button onClick = {() => props.handleShowRequestDetails(request)}>
								<img src={loupe} alt="loupe" className="table-action" />
							</button>
							<button onClick ={() => props.setRowCorrect(request)}>
								<img src={edit} alt="edit" className="table-action" />
							</button>
							<button onClick = {() => props.handleDeleteRequest(request.requestNumber)}>
								<img src={cross} alt="cross" className="table-action" />
							</button>
						</td>
					</tr>
				))}
			</tbody> 
		</table>
	</div>
);

export default Table;