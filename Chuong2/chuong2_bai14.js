var n = 100;
for (var i = 1; i <= Math.sqrt(n); i++) {
    if (Math.pow(i, 2) >= n) {
        console.log("a = " + (i - 1));
        break;
    }
}