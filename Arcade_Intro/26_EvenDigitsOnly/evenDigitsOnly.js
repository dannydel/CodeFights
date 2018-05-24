function evenDigitsOnly(n) {    
    var nums = n.toString().slice('');

    //modulos is your friend
    for(var x = 0; x < nums.length; x++){
        var t = parseInt(nums[x]) % 10;
        
        if(t % 2 != 0){
             return false;
         }
        nums.slice(0,-1);
    }
    return true;
}