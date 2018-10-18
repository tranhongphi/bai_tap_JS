var m = nhap(10),
    n = nhap(20);

function nhap(x) {
    return x;
}

function xuat(x) {
    console.log(x);
}

function check(x) {
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function T(m, n) {
    for (var i = m; i <= n; i++) {
        if (check(i)) {
            xuat(i);
        }
    }
}
T(m, n);