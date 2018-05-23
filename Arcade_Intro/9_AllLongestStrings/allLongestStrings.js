function allLongestStrings(a) {
    var longStrings = [];
    var longest = a[0].length;
    
    for(var x = 0; x < a.length; x++){
       if(a[x].length > longest){
           longest = a[x].length;
       }
    }
    
    for(var m = 0; m < a.length; m++){
        if(a[m].length === longest){
            longStrings.push(a[m]);
        }
    }
    return longStrings;
}