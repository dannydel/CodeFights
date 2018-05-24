function alphabeticShift(inputString) {
    var ascii = [];
    var converted = "";
    
    for(var x = 0; x < inputString.length; x++){
      if(inputString.charAt(x) === 'z'){
        ascii.push(97);
      } else{
        ascii.push(inputString.charCodeAt(x)+1); 
      }
    }
    
    for(var i = 0; i < ascii.length; i++){
        converted+=(String.fromCharCode(ascii[i]));
    }
    return converted;
  }