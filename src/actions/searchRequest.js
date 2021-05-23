function searchRequest(searchValue) {
	return {
		type: "searchRequest", 
		searchValue: searchValue
	};
}

export default searchRequest;
