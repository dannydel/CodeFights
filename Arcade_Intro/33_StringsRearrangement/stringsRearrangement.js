function stringsRearrangement(inputArray) {
    
    function differByOne(str1, str2){
        var mismatches = 0;
        for(var i = 0; i < str1.length; i++){
            if( str1[i] != str2[i]){
                mismatches++;
            }
        }
        return mismatches == 1;
    }
    
    function getPermute(arr){
        var length = arr.length;
        var sequence = [];
        var permutations = [];
        
        function permute(a){
            for(var i = 0; i < a.length; i++){
                var str = a[i];
                sequence.push(str);
                
                if(sequence.length === length){
                    permutations.push([...sequence]);
                }else{
                    var remaining = a.slice(0,i).concat(a.slice(i+1));
                    permute(remaining);
                }
                sequence.pop();
            }
        }
        permute(arr);
        return permutations;
    }
    
    var newSequences =  getPermute(inputArray);
    
    for(var seq of newSequences){
        var possible = true;
        for(var i = 1; i < seq.length; i++){
            if(!differByOne(seq[i], seq[i-1])){
                possible = false;
                break;
            }
        }
        if(possible) return true;
    }
    return false;
}