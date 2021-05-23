function addNewRequest(newRequest) {
	return {
		type: "addRequest", 
		newRequest: newRequest
	};
}

export default addNewRequest;
