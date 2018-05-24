function extractEachKth(inputArray, k) {
    let arr = [];
    let idxToRem = k - 1;
    for(let x = 0 ; x  < inputArray.length ; x++){
        x != idxToRem ? arr.push(inputArray[x]) : idxToRem+=k;
    } 
    return arr;
}