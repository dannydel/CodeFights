function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let totalWeight = weight1 + weight2;
    let totalValue = value1 + value2;
    let largest = value1 > value2 ? value1 : value2;
    
    if(totalWeight > maxW && weight1 <= maxW && weight2 > maxW){
        return value1;
    }else if(totalWeight > maxW && weight1 > maxW && weight2 <= maxW){
        return value2;
    }else if(totalWeight > maxW && (weight1 <= maxW || weight2 <= maxW)){
        return largest;
    }else if(totalWeight < maxW){
        return totalValue; 
    }else if(totalWeight == maxW){
        return totalValue;
    }else{
        return 0;
    }
}
