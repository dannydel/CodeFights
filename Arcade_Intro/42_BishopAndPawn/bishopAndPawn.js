function bishopAndPawn(bishop, pawn) {
    let b = GetNum(bishop[0]) + bishop[1];
    let p = GetNum(pawn[0]) + pawn[1];
    let y = Math.abs(b[1] - p[1]);
    let x = Math.abs(b[0] - p[0]);
    
    let result = x != 0 && y != 0 && x == y;
    
    return result;
}

function GetNum(x){
    let m = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5, 
        'f': 6,
        'g': 7,
        'h': 8
    };

    return m[x];
}