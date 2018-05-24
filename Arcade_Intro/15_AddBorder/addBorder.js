function addBorder(picture) {
    var tmp = [];
    var string = '*'.repeat(picture[0].length + 2);
    tmp.push(string);
    
    for(var x = 0; x < picture.length; x++){
        var str = "*" + picture[x] + "*";
            tmp.push(str);
    }
    
    tmp.push(string);
    return tmp;
}