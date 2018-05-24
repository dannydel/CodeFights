function isLucky(n) {
    var h1 = getHalves(n)[0];
    var h2 = getHalves(n)[1];
    var sum1 = 0;
    var sum2 = 0;
    
    for(var x = 0; x < h1.length; x++){    
        sum1 += parseInt(h1.charAt(x));
        sum2 += parseInt(h2.charAt(x));
    }
    return true ? sum1 === sum2 : false;
}

function getHalves(n){
    var str = n.toString();
    var h1 = str.slice( 0, str.length/2);
    var h2 = str.slice(str.length/2, str.length);
    var halves = [h1, h2];
    
    return halves;
}