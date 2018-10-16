var x = 100,
    s;
if (x < 50) {
    s = x * 1000;
} else if (x < 100) {
    s = x * 1500;
} else {
    s = x * 2000;
}
console.log(s);