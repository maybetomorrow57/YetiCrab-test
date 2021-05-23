import React from "react";
import "../styles/App.css";
import TableContainer from "./TableContainer";
import Search from "./Search";
import AddRequest from "./AddRequest";
import RequestDetails from "./RequestDetails";
import ButtonAddRequest from "./ButtonAddRequest";

const App = () => (
	<div className="app">
		<Search />
		<ButtonAddRequest /> 
		<AddRequest />
		<RequestDetails /> 
		<TableContainer />
	</div>
);

export default App;
