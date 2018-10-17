var a = 100,
    x = a,
    y = (x * x + a) / (2 * x),
    e = 0.00001;
while (Math.abs((x - y) / y) >= e) {
    x = (x * x + a) / (2 * x);
    y = (x * x + a) / (2 * x);
}
console.log(y);