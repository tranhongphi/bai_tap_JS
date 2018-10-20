var n = nhap(10);
var a = [];

function nhap(x) {
    return x;
}

function nhapmang(a, n) {
    for (var i = 0; i < n; i++) {
        a.push(i + 1);
    }
}

function tong1(a) {
    var s = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            s += a[i];
        }
    }
    return s;
}

function tong2(a) {
    var s = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            s += a[i];
        }
    }
    return s;
}

function xuat(a) {
    console.log(tong1(a));
    console.log(tong2(a));
}
nhapmang(a, n);
xuat(a);