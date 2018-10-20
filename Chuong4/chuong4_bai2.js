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

function tong(a) {
    var s = 0;
    for (var i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s;
}

function xuat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    console.log(tong(a));
}
nhapmang(a, n);
xuat(a);