function differentSymbolsNaive(s) {
    let a = s.split('');
    let m = a.filter((value, index, array) => 
                array.indexOf(value) != index);
}