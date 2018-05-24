function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    
    for(var x = 0; x < inputArray.length; x++){
        if(inputArray[x] === elemToReplace){
            inputArray[x] = substitutionElem;
        }
    }
    return inputArray;
}