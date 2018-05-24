function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var left1 = yourLeft === friendsRight;
    var right1 = yourRight === friendsLeft;
    var left2 = yourLeft === friendsLeft;
    var right2 = yourRight === friendsRight;
    
    if((left1 && right1) || (left2 && right2)){
        return true;
    }else{
        return false;
    }
}