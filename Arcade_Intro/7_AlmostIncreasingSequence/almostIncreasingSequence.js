function almostIncreasingSequence(seq) {
    var count= 0;
  
    for(var x = 0; x < seq.length; x++){ 
        if(seq[x] <= seq[x-1]) {
          count++
        }
        if((seq[x] <= seq[x-2] && seq[x+1] <= seq[x-1]) || count > 1){
          return false;
      }
    }
    return true;
  }