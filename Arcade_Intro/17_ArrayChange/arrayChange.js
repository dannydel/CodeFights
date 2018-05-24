function arrayChange(a) {
    var count = 0;
    for(var x = 0; x < a.length; x++){
        while(a[x+1] <= a[x]){
            a[x+1]++;
            count++;
        }
    }
    return count;
}