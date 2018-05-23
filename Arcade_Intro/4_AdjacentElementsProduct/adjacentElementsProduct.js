function adjacentElementsProduct(inputArray) {
    var winner= inputArray[0] * inputArray[1];
    for( var x = 1; x < inputArray.length -1; x ++){
            var s = inputArray[x] * inputArray[x +1]
            if(s > winner){
                winner = s;
            }
        }
    return winner;
}