var n = 10,
    s = 0;
for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
        s += i;
    }
}
console.log("S = " + s);