var m = 10,
    n = 20;
for (var i = m; i <= n; i++) {
    var d = 0;
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            d = 1;
            break;
        }
    }
    if (d == 0) {
        console.log(i);
    }
}