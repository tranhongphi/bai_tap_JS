var x = 6,
    d;
if (x < 4) {
    d = "F";
} else if (x < 5.5) {
    d = "D";
} else if (x < 7) {
    d = "C";
} else if (x < 8.5) {
    d = "B";
} else {
    d = "A";
}
console.log(d);