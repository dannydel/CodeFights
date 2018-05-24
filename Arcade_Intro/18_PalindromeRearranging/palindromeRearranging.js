
function palindromeRearranging(inputString) {
    var c = {};
    var ones = [];
    var odds = [];
    
    //Here I split the string by a space
    // For Each to count each letter and return the letter mapped to the count to the 
    // c object declared above
    inputString.split('').forEach(e => c[e] = (c[e] || 0)+1);

    //For Loop to loop through values in c to see which value
    // push all items === 1 onto ones array
    // push all odds onto odds array 
    for(var item in c){
        console.log(c[item]);
        if(c[item] === 1){
            ones.push(item)
        }else if(c[item] % 2 != 0){
            odds.push(item);
        }
    }
    
    //if there are more than one items with exactly 1
    // letter return false.
    if(ones.length > 1 || odds.length >= 2){
            return false;
    }
    
    //if passes all other tests return true it can be palindrome
    return true;
}