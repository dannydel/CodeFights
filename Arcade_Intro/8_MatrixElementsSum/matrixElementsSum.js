function matrixElementsSum(matrix) {
    var sum = 0;
    var badIndex = [];

    for(var x = 0; x < matrix.length; x++){
        for(var y = 0; y < matrix[x].length; y++){
            if(matrix[x][y] === 0 ){
                badIndex.push(y);
            }
            else if(badIndex.indexOf(y) === -1 ){
                sum+= matrix[x][y];
            }
        }
    }    
    return sum;
}