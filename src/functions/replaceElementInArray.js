function replaceElementInArray(array, element) {
    for(let i = 0; i < array.length; i++) {
        if (array[i].requestNumber === element.requestNumber) {
        	array[i] = element;
        	break;
        }
    }
    return array;
}

export default replaceElementInArray;