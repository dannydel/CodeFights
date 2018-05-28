function firstDigit(inputString) {
    let chars = inputString.split('');
    for(let x = 0; x < chars.length; x++){
        if(!isNaN(chars[x]) && chars[x] != " ")return chars[x]; 
    }
}