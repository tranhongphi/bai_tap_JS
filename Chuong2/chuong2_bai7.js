var n = 10,
    s1 = 0,
    s2 = 0;
for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        s1 += i;
    } else {
        s2 += i;
    }
}
console.log("tong cac so chan tu 1 den n la : " + s1);
console.log("tong cac so le tu 1 den n la : " + s2);