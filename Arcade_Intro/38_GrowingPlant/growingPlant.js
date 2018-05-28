function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let mrPlant = upSpeed;
    let count = 1;
    
    if (upSpeed > desiredHeight) return 1;
    
    while(mrPlant < desiredHeight){
        mrPlant+=upSpeed;
        mrPlant-=downSpeed;
        count++;
    }
    
    return count;
    
}