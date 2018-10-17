var x = 3,
    n = 5,
    s = 0;
if (x % 2 == 0) {
    for (var i = 1; i <= n; i++) {
        s += (1 / i);
    }
} else {
    s = Math.sqrt(n - 1);
}
console.log("F = " + s);