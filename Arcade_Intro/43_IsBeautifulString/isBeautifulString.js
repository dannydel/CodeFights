function isBeautifulString(inputString) {
    var arr = new Array(26).fill(0)
    for(var i = 0;i < inputString.length;i++){
        arr[parseInt(inputString.charCodeAt(i) - 97)]++;
    }
    var letter = inputString.length + 1;
    for(var i = 0;i < arr.length;i++){
        if(letter < arr[i])
            return false;
        else
            letter = arr[i];
    }
    return true;
}