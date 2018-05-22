/*
    100 >>> 0 is a bit shift right which in this case just rounds c into 
    a positive int
*/
function centuryFromYear(year) {
    let c = year / 100 >>> 0;
    return year > c * 100 ? c += 1 : c; 
   }