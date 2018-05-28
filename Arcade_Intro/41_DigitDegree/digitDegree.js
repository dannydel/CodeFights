function digitDegree(n) {
    let arr = n.toString().split('');
    let len = arr.length;
    let d = 0;
    
    while(arr.length > 1){
        let sum = 0; 
        for(let i = 0; i < len; i++){
            sum+= parseInt(arr[i]);
        } 
        arr = sum.toString().split('');
        d++;
    }
    
    if(len <= 1)
        return 0;
    else
        return d;

}