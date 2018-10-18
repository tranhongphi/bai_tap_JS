var n = nhap(10),
    s = 0;

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

function T(n, s) {
    for (var i = 2; i <= n; i++) {
        if (check(i)) {
            s += i;
        }
    }
    xuat(s);
}
T(n, s);