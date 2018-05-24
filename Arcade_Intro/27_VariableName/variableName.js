function variableName(name) {
    var regex = /^[a-zA-Z]*[a-zA-Z_][A-Za-z0-9_]*$/g;
    if(regex.test(name))return true;
    return false;     
}