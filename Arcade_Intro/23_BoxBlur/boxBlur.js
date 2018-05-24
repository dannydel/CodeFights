function boxBlur(image) {
    var imgArr = [];

    for (var y = 0; y < image.length - 2; y++) {
        var ln = [];
        for (var x = 0; x < image[y].length - 2; x++) {
            var sum = 0;
            var count = 0;

            for (var a = y; a < y + 3; a++) {
                for (var b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    console.log(image[a][b]);
                    count++;
                }
            }
            ln.push(Math.floor(sum / count));
        }
        imgArr.push(ln);
    }
    return imgArr;
}