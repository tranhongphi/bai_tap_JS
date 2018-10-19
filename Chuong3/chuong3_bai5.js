var n = nhap(5),
    x = GT(n);

function nhap(x) {
    return x;
}

function GT(n) {
    var s = 1;
    for (var i = 1; i <= n; i++) {
        s *= i;
    }
    return s;
}

function xuat(x) {
    console.log(x);
}
xuat(x);
