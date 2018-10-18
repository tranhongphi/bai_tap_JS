var n = nhap(10),
    x = nhap(3),
    s = nhap(0);

function nhap(x) {
    return x;
}

function xuat(x) {
    console.log(x);
}

function T(n, x, s) {
    if (x % 2 == 0) {
        for (var i = 1; i <= n; i++) {
            s += (1 / i);
        }
    } else {
        s = Math.sqrt(n - 1);
    }
    xuat(s);
}
T(n, x, s);