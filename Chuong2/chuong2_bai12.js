var n = 10,
    ans = 0;
for (var i = n - 1; i >= 2; i--) {
    var d = 0;
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            d = 1;
            break;
        }
    }
    if (d == 0) {
        ans++;
    }
    if (ans == 2) {
        console.log(i);
        break;
    }
}