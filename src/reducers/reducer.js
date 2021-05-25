import initialState from '../initialState';
import replaceElementInArray from "../functions/replaceElementInArray";
import sortTop from "../functions/sortTop";
import sortDown from "../functions/sortDown";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "deleteRequest": 
        	return {
        		...state,
        		requests: state.requests.filter(request => request.requestNumber !== action.requestNumberDelete)
        	};
        case "searchRequest": 
        	return {
        		...state, 
        		searchValue: action.searchValue
        	};
        case "addRequest": 
            return {
                ...state,
                requests: state.requests.concat(action.newRequest)
            }; 
        case "showAddRequest": 
            return {
                ...state,
                showAddRequest: !state.showAddRequest
            };
        case "correctRequest":
        	const requestsCopy = state.requests.concat();
        	return {
        		...state,
        		requests: replaceElementInArray(requestsCopy, action.correctedRequest)
        	};
        case "requestDetails": 
            return {
                ...state,
                requestDetails: action.requestDetails
            };
        case "coverRequestDetails": 
        	return {
        		...state,
        		requestDetails: null
        	};
        case "sortRequests":
        	const requestsSorted = (state.sortType === "toTop") 
        		? state.requests.concat().sort(sortDown(action.sortField)) 
        		: state.requests.concat().sort(sortTop(action.sortField));
        	return {
        		...state,
        		sortField: action.sortField,
        		sortType: (state.sortType === "toTop") ? "toDown" : "toTop",
        		requests: requestsSorted
        	};
        
        default: return state;
    }
}
