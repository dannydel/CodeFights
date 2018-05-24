function arrayMaximalAdjacentDifference(arr) {
    var diffs = [];
    
    for(var x = 0; x < arr.length; x++){
        if(arr[x+1] != null){
            var difference = Math.abs(arr[x] - arr[x+1]);
            diffs.push(difference);
        }
    }
    //reduces array to the max difference in the array of differences
    return diffs.reduce(function(a, b) { return Math.max(a, b)}); 
}