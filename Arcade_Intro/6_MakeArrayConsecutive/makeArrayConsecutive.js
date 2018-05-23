function makeArrayConsecutive2(statues) {
    //unecessary but cool that you can do this with built in functions
    //var sorted = statues.sort(function(a,b){return a-b});
    
    // ... is the es6 spread operator
    // What this is doing is making the statues array into a set of numbers like:
    // 1 2 3 4 5 and then getting the max or min of them. 
    var max = Math.max(...statues);
    var min = Math.min(...statues);
    return max - min + 1 - statues.length;
}