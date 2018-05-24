function chessBoardCellColor(cell1, cell2) {
    var alphaList = ['A','B','C','D','E','F','G','H'];
        var a1 = 0;
        var a2 = 0;
        
        for(var x = 0; x < alphaList.length; x++){
            if(cell1.charAt(0) === alphaList[x]){   
                a1 = x + 1;
            }
            if(cell2.charAt(0) === alphaList[x]){
                a2 = x + 1;
            }
        }
        var c1 = a1 + parseInt(cell1.charAt(1));
        var c2 = a2 + parseInt(cell2.charAt(1));
        
        if(((c1%2 === 0) && (c2%2 === 0)) || ((c1%2 !=0) && (c2%2 != 0))){
            return true;
        }else{
            return false;
        }
    }