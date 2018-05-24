function sortByHeight(a) {
    var keep = a.slice();
     var idx = [];
     
     for(var i = 0; i < keep.length; i++){
         if(keep[i] === -1){
             idx.push(i);
         }
     }
     
     var sorted = a.sort(function(a,b){return a-b;}).filter( n => n != -1);
     for(var x = 0; x < idx.length; x++){
         sorted.splice(idx[x], 0, -1);
     }
     return sorted;
 }
 