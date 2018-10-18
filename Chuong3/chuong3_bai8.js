var n = nhap(10);

function nhap(x) {
    return x;
}

function xuat(x) {
    console.log(x);
}

function T(n) {
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            xuat(i);
        }
    }
}
T(n);