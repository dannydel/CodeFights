function minesweeper(matrix) {
    
    let ret = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));
    
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){

            if(matrix[y][x-1] != undefined){
                if(matrix[y][x-1]){
                    ret[y][x]++;
                }
            }
            
            if(matrix[y][x+1] != undefined){
                if(matrix[y][x+1] === true){
                    ret[y][x]++;
                }
            }
            
            if(matrix[y+1] != undefined){
                if(matrix[y+1][x] === true){
                    ret[y][x]++;
                }
                
            }
            
            if(matrix[y-1] != undefined){
                if(matrix[y-1][x] === true){
                    ret[y][x]++;
                }
            }
            
            if(matrix[y-1] != undefined){
                if(matrix[y-1][x-1] === true){
                    ret[y][x]++;
                }
            }
            
            if(matrix[y-1] != undefined){
                if(matrix[y-1][x+1] === true){
                    ret[y][x]++;
                }
            }
            
             if(matrix[y+1] != undefined){
                if(matrix[y+1][x+1] === true){
                    ret[y][x]++;
                }
            }
            
            if(matrix[y+1] != undefined){
                if(matrix[y+1][x-1] === true){
                    ret[y][x]++;
                }    
            }
        }
    }
    return ret;
}