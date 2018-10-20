var n = nhap(10),
    a = [];

function nhap(x) {
    return x;
}

function nhapmang(a, n) {
    for (var i = 0; i < n; i++) {
        a.push(i + 1);
    }
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

function T(a) {
    var s = 0;
    for (var i = 0; i < a.length; i++) {
        if (check(a[i])) {
            s += a[i];
        }
    }
    return s;
}
nhapmang(a, n);
xuat(T(a));