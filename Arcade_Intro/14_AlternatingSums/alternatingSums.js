function alternatingSums(a) {
    var t1 = 0;
    var t2 = 0;
    for(var x = 0; x < a.length; x++){
        if(x%2 === 0){
            t1+= a[x];
        }else{
            t2+= a[x];
        } 
    }
    return [t1,t2];
}