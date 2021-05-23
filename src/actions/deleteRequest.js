function deleteRequest(requestNumberDelete) {
	return {
		type: "deleteRequest", 
		requestNumberDelete: requestNumberDelete
	};
}

export default deleteRequest;
