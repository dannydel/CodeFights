function commonCharacterCount(s1, s2) {
    var count = 0;

    for (var x = 0; x < s1.length; x++) {
        for (var y = 0; y < s2.length; y++) {
            if (s1[x] === s2[y]) {
                count++;
                s2 = s2.replace(s1[x], '');
                break;
            }
        }
    }
    return count;
}
   