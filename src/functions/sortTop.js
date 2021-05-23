function sortTop(field) {
	return function(a, b) {
		return a[field] > b[field] ? 1 : -1;
	};
}

export default sortTop;
