function avoidObstacles(arr) {
    var hop = 2;
    
    while(arr.some((obstacle) => obstacle % hop === 0 )){
        hop++;
    }
    
    return hop;
}
