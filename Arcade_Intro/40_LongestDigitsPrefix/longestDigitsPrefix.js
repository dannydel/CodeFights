function longestDigitsPrefix(inputString) {
    let str = inputString.split(/\D/);
    
    if (str[0].length > 0) return str[0];
    
    return "";
}