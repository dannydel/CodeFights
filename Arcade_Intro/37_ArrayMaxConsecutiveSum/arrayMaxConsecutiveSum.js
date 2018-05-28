function arrayMaxConsecutiveSum(a, k) {
    let max = 0;
    
    for(let i = 0; i < k; i++){
       max+=a[i];
    }
 
    var sum = max
     for (let i = 0; i < a.length - k; i++) {
         sum = sum -  a[i] + a[i + k];
        
         if (sum > max) {
             max = sum
         }
     }
     return max;
 }
 
 // works only if O(n2)
 // let result = [];
     
 //     for(let x = 0; x < inputArray.length; x++){
 //         let inner = 0;
 //         for(let y = x; y < (x + k); y++){
 //             inner+=inputArray[y];
 //         }
 //         result.push(inner);
 //     } 
     
 //     return result.sort(function(a, b) { return b - a;})[0];
 