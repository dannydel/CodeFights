function absoluteValuesSumMinimization(a) {
    if(a.length % 2 === 0){
        return a[(Math.floor(a.length /2)) -1];
    }else{
        return a[Math.floor(a.length /2)];    
    }
}