import React from 'react';
import "../styles/VisualSort.css";
import arrowdown from "../styles/images/arrowdown.png";
import arrowup from "../styles/images/arrowup.png";

const VisualSort = (props) => {
	if (props.sortType === "toTop") {
		return (
			<img src = {arrowdown}  alt="arrowdown" className="visual-sort"/>
		);
	}
	
	return (
		<img src = {arrowup}  alt="arrowup" className="visual-sort"/>
	);
};

export default VisualSort;