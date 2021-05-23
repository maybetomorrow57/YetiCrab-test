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
        	return {
        		...state,
        		requests: replaceElementInArray(state.requests, action.correctedRequest)
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
        	return {
        		...state,
        		sortField: action.sortField,
        		sortType: state.sortType === "toTop" ? "toDown" : "toTop",
        		requests: state.sortType === "toTop" ? state.requests.sort(sortDown(action.sortField)) : state.requests.sort(sortTop(action.sortField))
        	};
        
        default: return state;
    }
}
